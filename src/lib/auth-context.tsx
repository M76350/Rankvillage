"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  plan: "starter" | "pro" | "business";
  businessName: string;
  location: string;
  avatar: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  signup: (data: SignupData) => Promise<{ ok: boolean; error?: string }>;
  logout: () => void;
}

interface SignupData {
  name: string;
  email: string;
  password: string;
  businessName: string;
  location: string;
  businessType: string;
}

const AuthContext = createContext<AuthContextType | null>(null);

// Static demo user
const DEMO_USER: User = {
  id: "usr_001",
  name: "Rajesh Sharma",
  email: "rajesh@sharmarestaurant.com",
  plan: "pro",
  businessName: "Sharma Restaurant",
  location: "Dwarka, Delhi",
  avatar: "RS",
};

const STORAGE_KEY = "rv_user";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setUser(JSON.parse(stored));
    } catch {
      // ignore
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Static auth — accept any email with password length >= 6
    if (!email || password.length < 6) {
      return { ok: false, error: "Invalid email or password." };
    }
    await new Promise((r) => setTimeout(r, 800)); // simulate network
    const u = { ...DEMO_USER, email };
    setUser(u);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
    return { ok: true };
  };

  const signup = async (data: SignupData) => {
    if (!data.email || data.password.length < 6) {
      return { ok: false, error: "Password must be at least 6 characters." };
    }
    await new Promise((r) => setTimeout(r, 1000));
    const u: User = {
      id: "usr_" + Date.now(),
      name: data.name,
      email: data.email,
      plan: "starter",
      businessName: data.businessName,
      location: data.location,
      avatar: data.name.slice(0, 2).toUpperCase(),
    };
    setUser(u);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
    return { ok: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
