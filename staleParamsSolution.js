The solution involves using the `useLocation` hook in conjunction with route matching. Instead of directly relying on `useParams`, we'll extract the necessary information from `useLocation`'s `pathname` and perform manual parsing. This ensures that the component gets the correct parameters regardless of conditional rendering and unmounting.

```javascript
import { useLocation } from 'react-router-dom';

function MyComponent() {
  const location = useLocation();
  const match = location.pathname.match(/\/my-route\/(\d+)/);

  let myParam = null;
  if (match) {
    myParam = match[1];
  }

  return (
    <div>
      {myParam ? <p>My Parameter: {myParam}</p> : <p>No parameter found</p>}
    </div>
  );
}

```
This solution provides a more robust way to handle parameter retrieval, avoiding the potential pitfalls associated with `useParams` in conditionally rendered components.