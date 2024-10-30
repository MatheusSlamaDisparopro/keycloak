"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NextAdapterPages from "next-query-params/pages";
import { ReactNode } from "react";
import { QueryParamProvider } from "use-query-params";

export const queryClient = new QueryClient();

export function ReactQueryProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <QueryParamProvider adapter={NextAdapterPages}>
        {children}
      </QueryParamProvider>
    </QueryClientProvider>
  );
}
