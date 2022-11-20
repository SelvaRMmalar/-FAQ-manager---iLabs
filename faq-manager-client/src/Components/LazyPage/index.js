import { React, useMemo, lazy, Suspense } from 'react';
import Loading from '../Loading';

function LazyLoad({ page }) {
  const Component = useMemo(() => {
    return lazy(() => import(`../../Pages/${page}`));
  }, [page]);
  return (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  );
}

export default LazyLoad;
