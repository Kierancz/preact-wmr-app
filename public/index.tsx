import {
  LocationProvider,
  Router,
  Route,
  lazy,
  ErrorBoundary,
  hydrate,
  prerender as ssr,
} from "preact-iso";
import Home from "./pages/home";
import NotFound from "./pages/_404";
import Header from "./header";

const About = lazy(() => import("./pages/about/index"));

export function App() {
  return (
    <LocationProvider>
      <div className="app">
        <Header />
        <ErrorBoundary>
          <Router>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route default component={NotFound} />
          </Router>
        </ErrorBoundary>
      </div>
    </LocationProvider>
  );
}

hydrate(<App />);

export async function prerender(data: Record<string, unknown>) {
  return await ssr(<App {...data} />);
}
