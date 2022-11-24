import { Link, useLocation } from 'react-router-dom';

export function NavigationLink({ to, className, ...restProps }) {
  const { pathname, search } = useLocation();

  let path = pathname;

  if (search) {
    path += search;
  }

  const isActive = to === path;
  let activeClassName = isActive ? className?.({ isActive }) ?? 'active' : null;
  return <Link to={to} className={activeClassName} {...restProps} />;
}
