import { NavigationLink } from './NavigationLink';

export function GlobalNav() {
  return (
    <nav aria-label="글로벌 페이지 내비게이션">
      <ul>
        <li>
          <NavigationLink to="/books?isbn=9791190800969">
            책벌레의 하극상
          </NavigationLink>
        </li>
        <li>
          <NavigationLink to="/books?isbn=9788936495701">
            아버지의 해방일지
          </NavigationLink>
        </li>
        <li>
          <NavigationLink to="/books">알 수 없는 도서</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/consumers?id=csm-61824">
            하원길 고객님
          </NavigationLink>
        </li>
        <li>
          <NavigationLink to="/consumers?id=csm-80176">
            하민아 고객님
          </NavigationLink>
        </li>
        <li>
          <NavigationLink to="/consumers?id=csm-28812">
            김정국 고객님
          </NavigationLink>
        </li>
      </ul>
    </nav>
  );
}
