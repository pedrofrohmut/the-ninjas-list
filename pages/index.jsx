import Link from "next/link"

import StyledContainer from "./home/styles"

export default function HomePage() {
  return (
    <StyledContainer>
      <h1>Home page</h1>
      <p>
        Lorem quod nemo quis in consectetur sit? Laudantium quam commodi
        nesciunt assumenda quod? Doloremque voluptate magnam possimus
        exercitationem aut. At nesciunt odit atque cupiditate ipsam Id officiis
        qui commodi quidem?
      </p>
      <p>
        Sit amet officia fuga enim est Adipisci eum dolores porro a qui, odio,
        sunt? Molestias iusto eaque voluptatibus quibusdam suscipit? Laudantium
        aut nemo laudantium libero expedita et. Enim sunt ullam
      </p>
      <p>
        Sit amet officia fuga enim est Adipisci eum dolores porro a qui, odio,
        sunt? Molestias iusto eaque voluptatibus quibusdam suscipit? Laudantium
        aut nemo laudantium libero expedita et. Enim sunt ullam
      </p>
      <Link href="/ninjas">
        <a className="button">See the ninjas list</a>
      </Link>
    </StyledContainer>
  )
}
