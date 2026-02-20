import React, { useEffect, useState } from 'react';
import {  AlertCircle, Github } from 'lucide-react';

// Interface for a single day's contribution data
interface Contribution {
  date: string;
  count: number;
  level: number; // 0-4
}

// Interface for the overall API response
interface GitHubData {
  total: {
    [key: string]: number; // e.g., "2024": 150, "lastYear": 150
  };
  contributions: Contribution[];
}

interface GitHubHeatmapProps {
  username?: string;
}

const GitHubHeatmap: React.FC<GitHubHeatmapProps> = ({ username = "vathsavv56" }) => {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedDay, setSelectedDay] = useState<Contribution | null>(null);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // We use the 'last' year parameter to get the standard GitHub view
        const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
        
        if (!response.ok) {
          throw new Error('User not found or API rate limit exceeded');
        }
        
        const result: GitHubData = await response.json();
        // Simulate a small delay to prevent flickering if the API is too fast (optional, for aesthetics)
        await new Promise(resolve => setTimeout(resolve, 500)); 
        setData(result);
      } catch (err) {
        if (err instanceof Error) {
            setError(err.message);
        } else {
            setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  // Helper to determine color based on contribution level (0-4)
  const getLevelColor = (level: number): string => {
    switch (level) {
      case 0: return 'bg-gray-100'; // No contributions
      case 1: return 'bg-gray-300'; // Low
      case 2: return 'bg-gray-500'; // Medium
      case 3: return 'bg-gray-700'; // High
      case 4: return 'bg-black';    // Intense
      default: return 'bg-gray-100';
    }
  };

  // Helper to format date nicely
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Skeleton Loader Component
  if (loading) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-2xl border border-gray-200 shadow-sm font-sans">
        <div className="animate-pulse">
            {/* Header Skeleton */}
            <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-lg"></div>
                <div className="space-y-2">
                <div className="h-4 w-32 bg-gray-200 rounded"></div>
                <div className="h-3 w-48 bg-gray-100 rounded"></div>
                </div>
            </div>
            
            {/* Legend Skeleton */}
            <div className="hidden sm:flex items-center space-x-2">
                <div className="h-3 w-8 bg-gray-100 rounded"></div>
                <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-3 h-3 rounded-sm bg-gray-200"></div>
                    ))}
                </div>
                <div className="h-3 w-8 bg-gray-100 rounded"></div>
            </div>
            </div>

            {/* Grid Skeleton */}
            <div className="overflow-hidden relative opacity-50">
                <div className="grid grid-rows-7 grid-flow-col gap-[3px] w-max">
                    {/* Render enough blocks to mimic a year (approx 53 weeks * 7 days) */}
                    {[...Array(371)].map((_, i) => (
                        <div
                            key={i}
                            className="w-3 h-3 rounded-[2px] bg-gray-100"
                        />
                    ))}
                </div>
                {/* Shimmer overlay effect */}
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent z-10"></div>
            </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full p-6 flex items-center justify-center text-red-500 bg-red-50 rounded-xl border border-red-100">
        <AlertCircle className="w-5 h-5 mr-2" />
        <span className="text-sm font-medium">{error}</span>
      </div>
    );
  }

  // Calculate total contributions for the shown period
  // We use type assertion or checks to safely access the values since keys are dynamic
  const totalContributions = data?.total ? Object.values(data.total).reduce((a, b) => a + b, 0) : 0;

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-2xl border border-gray-200 shadow-sm font-sans">
      
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-black text-white rounded-lg">
            <Github size={20} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900 leading-none">{username}</h2>
            <p className="text-sm text-gray-500 mt-1">
              <span className="font-semibold text-gray-900">{totalContributions}</span> contributions in the last year
            </p>
          </div>
        </div>
        
        {/* Simple Legend */}
        <div className="hidden sm:flex items-center space-x-2 text-xs text-gray-400">
          <span>Less</span>
          <div className="flex space-x-1">
            <div className="w-3 h-3 rounded-sm bg-gray-100"></div>
            <div className="w-3 h-3 rounded-sm bg-gray-300"></div>
            <div className="w-3 h-3 rounded-sm bg-gray-500"></div>
            <div className="w-3 h-3 rounded-sm bg-gray-700"></div>
            <div className="w-3 h-3 rounded-sm bg-black"></div>
          </div>
          <span>More</span>
        </div>
      </div>

      {/* Heatmap Container - Scrollable */}
      <div className="relative group">
        <div className="overflow-x-auto pb-2 scrollbar-hide">
          <div className="min-w-max">
            <div 
              className="grid grid-rows-7 grid-flow-col gap-[3px]"
              style={{ width: 'max-content' }}
            >
              {data && data.contributions.map((day, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setSelectedDay(day)}
                  onMouseLeave={() => setSelectedDay(null)}
                  className={`
                    w-3 h-3 rounded-[2px] transition-all duration-200 ease-in-out cursor-pointer
                    ${getLevelColor(day.level)}
                    hover:scale-125 hover:z-10 hover:shadow-md hover:border hover:border-white
                  `}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Floating Tooltip (Shows when hovering a cell) */}
        {selectedDay && (
          <div className="absolute bottom-4 left-0 right-0 mx-auto w-max pointer-events-none z-20 transition-opacity duration-200 opacity-100">
             <div className="bg-black text-white text-xs py-1.5 px-3 rounded-lg shadow-xl flex flex-col items-center">
                <span className="font-bold">{selectedDay.count} contributions</span>
                <span className="text-gray-400 font-normal">{formatDate(selectedDay.date)}</span>
             </div>
          </div>
        )}
      </div>

      {/* Footer / Mobile Legend */}
      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400 sm:hidden">
        <span>Less</span>
        <div className="flex space-x-1">
          <div className="w-3 h-3 rounded-sm bg-gray-100"></div>
          <div className="w-3 h-3 rounded-sm bg-gray-300"></div>
          <div className="w-3 h-3 rounded-sm bg-gray-500"></div>
          <div className="w-3 h-3 rounded-sm bg-gray-700"></div>
          <div className="w-3 h-3 rounded-sm bg-black"></div>
        </div>
        <span>More</span>
      </div>
    </div>
  );
};

export default GitHubHeatmap;