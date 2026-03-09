import '@/lib/errorReporter';
import { enableMapSet } from "immer";
enableMapSet();
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import '@/index.css'
import { HomePage } from '@/pages/HomePage'
import { GoalsPage } from '@/pages/goals/GoalsPage'
import { GoalDetailPage } from '@/pages/goals/GoalDetailPage'
import { NewGoalPage } from '@/pages/goals/NewGoalPage'
import { ReviewPage } from '@/pages/goals/ReviewPage'
import { TimelinePage } from '@/pages/timeline/TimelinePage'
import { FinancePage } from '@/pages/finance/FinancePage'
import { HealthPage } from '@/pages/health/HealthPage'
import { MindsetPage } from '@/pages/mindset/MindsetPage'
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/goals",
    element: <GoalsPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/timeline",
    element: <TimelinePage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/finance",
    element: <FinancePage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/health",
    element: <HealthPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/mindset",
    element: <MindsetPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/goals/:id",
    element: <GoalDetailPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/goals/new",
    element: <NewGoalPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/goals/review",
    element: <ReviewPage />,
    errorElement: <RouteErrorBoundary />,
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </QueryClientProvider>
  </StrictMode>,
)