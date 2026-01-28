import React, { useState } from 'react';
import { Eye, EyeOff, ArrowLeft, Check, Command, User, Mail, Lock, CheckCircle2, Github } from 'lucide-react';

export default function AuthLayout() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
    email: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    alert("Request Processed (Simulation)");
  };

  const isValid = (field: string) => field.length > 3;

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-0 md:p-4 lg:p-8 font-['Poppins']">
      
      
      
      <div className="bg-white w-full md:max-w-5xl md:h-175 min-h-screen md:min-h-0 h-auto md:rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:grid md:grid-cols-2 p-0 md:p-2 relative">
        
       
        <div className="relative w-full md:h-full h-48 md:rounded-4xl rounded-b-4xl md:rounded-t-4xl overflow-hidden flex flex-col items-center justify-center md:justify-start text-white p-6 md:p-8 bg-gradient-to-b from-gray-900 via-[#8B2323] to-[#FF4500] shrink-0 transition-all duration-500 ease-in-out">
           <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
           
           
           <div className="z-10 md:mt-8 md:mb-auto flex flex-col items-center">
             <Command size={48} className="text-white opacity-90 mb-2 md:mb-0" />
           </div>

           
           <div className="z-10 text-center md:mb-20 space-y-4 hidden md:block">
             <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-lg font-['JetBrains_Mono']">
               Immersive <br/> Reality
             </h2>
             <p className="text-red-100/90 text-lg max-w-xs mx-auto font-light">
               Experience the future of digital interaction with our platform.
             </p>
           </div>

           
           <div className="md:hidden z-10 text-center">
             <h2 className="text-2xl font-bold tracking-tight text-white font-['JetBrains_Mono']">
               Immersive Reality
             </h2>
           </div>
        </div>

        
        <div className="h-full w-full bg-white px-6 md:px-12 lg:px-16 py-8 flex flex-col flex-1 overflow-y-auto">
          
          <button className="self-start mb-6 text-gray-400 hover:text-gray-900 transition-colors">
            <ArrowLeft size={24} />
          </button>

          <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
            
            <div className="mb-6 md:mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {isLogin ? 'Log in' : 'Sign up'}
              </h1>
              <p className="text-gray-500 text-sm font-medium">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-black font-bold underline decoration-1 hover:text-gray-700 underline-offset-2 transition-colors"
                >
                  {isLogin ? "Create an Account" : "Log In"}
                </button>
              </p>
            </div>

            <div className="space-y-5 md:space-y-6">
              
              {!isLogin && (
                <div className="group animate-in fade-in slide-in-from-top-2">
                  <div className="flex items-center gap-4 border-b border-gray-200 py-3 focus-within:border-black transition-colors">
                    <User size={20} className="text-gray-400 group-focus-within:text-black transition-colors" />
                    <input
                      type="text"
                      id="userName"
                      placeholder="User Name"
                      className="flex-1 bg-transparent border-none outline-none text-gray-900 placeholder-gray-400 font-medium font-['JetBrains_Mono']"
                      value={formData.userName}
                      onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                    />
                    {isValid(formData.userName) && (
                      <CheckCircle2 size={18} className="text-green-500 animate-in zoom-in duration-300" />
                    )}
                  </div>
                </div>
              )}

              <div className="group">
                 <div className="flex items-center gap-4 border-b border-gray-200 py-3 focus-within:border-black transition-colors">
                    <Mail size={20} className="text-gray-400 group-focus-within:text-black transition-colors" />
                    <input
                      type="email"
                      id="email"
                      placeholder="Email Address"
                      className="flex-1 bg-transparent border-none outline-none text-gray-900 placeholder-gray-400 font-medium font-['JetBrains_Mono']"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    {isValid(formData.email) && formData.email.includes('@') && (
                      <CheckCircle2 size={18} className="text-green-500 animate-in zoom-in duration-300" />
                    )}
                 </div>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 border-b border-gray-200 py-3 focus-within:border-black transition-colors">
                  <Lock size={20} className="text-gray-400 group-focus-within:text-black transition-colors" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Password"
                    className="flex-1 bg-transparent border-none outline-none text-gray-900 placeholder-gray-400 font-medium font-['JetBrains_Mono']"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {!isLogin && formData.password.length > 0 && (
                  <div className="mt-2 flex gap-1">
                     <div className={`h-1 flex-1 rounded-full ${formData.password.length > 4 ? 'bg-green-500' : 'bg-gray-200'} transition-colors`}></div>
                     <div className={`h-1 flex-1 rounded-full ${formData.password.length > 6 ? 'bg-green-500' : 'bg-gray-200'} transition-colors`}></div>
                     <div className={`h-1 flex-1 rounded-full ${formData.password.length > 8 ? 'bg-green-500' : 'bg-gray-200'} transition-colors`}></div>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-4 pt-2">
                {isLogin && (
                  <div className="flex justify-end">
                    <button type="button" className="text-sm font-bold text-gray-900 hover:underline">
                      Forgot Password?
                    </button>
                  </div>
                )}
                
                <div className="flex items-center gap-3">
                    <div className="relative flex items-center">
                      <input 
                        type="checkbox" 
                        id="terms" 
                        className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 checked:bg-black checked:border-black transition-all"
                      />
                      <Check size={12} className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" />
                    </div>
                    <label htmlFor="terms" className="text-sm text-gray-500 cursor-pointer select-none">
                      I agree to the <span className="font-bold underline text-gray-800">Terms & Condition</span>
                    </label>
                 </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-black text-white rounded-full py-4 font-bold text-lg hover:bg-gray-800 transition-transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center shadow-lg shadow-black/20"
              >
                {isLoading ? (
                  <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  isLogin ? 'Log in' : 'Create Account'
                )}
              </button>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-3 text-gray-400 font-medium">or</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pb-4 md:pb-0">
                 <button type="button" className="flex items-center justify-center gap-2 border border-gray-200 rounded-full py-3 hover:bg-gray-50 hover:border-gray-300 transition-all group">
                   <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 group-hover:scale-110 transition-transform" />
                   <span className="text-sm font-bold text-gray-600">Google</span>
                 </button>
                 <button type="button" className="flex items-center justify-center gap-2 border border-gray-200 rounded-full py-3 hover:bg-gray-50 hover:border-gray-300 transition-all group">
                   <Github size={20} className="text-gray-900 group-hover:scale-110 transition-transform" />
                   <span className="text-sm font-bold text-gray-600">GitHub</span>
                 </button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}