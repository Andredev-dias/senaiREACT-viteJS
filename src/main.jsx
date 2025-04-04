import ReactDOM from 'react-dom/client'
import { Home } from './Home.jsx'
import { Consume } from './Consume.jsx';
import { RickAndMorty } from './RickAndMorty.jsx';
// import { Analytics } from "@vercel/analytics/react"
// import { SpeedInsights } from "@vercel/speed-insights/react"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home />,
  },
  {
    path: "/consume",
    element:<Consume />,
  },
  {
    path: "/rm",
    element:<RickAndMorty />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
{/*       <SpeedInsights/>
      <Analytics /> */}
      <RouterProvider router={router} />
  </>
)
