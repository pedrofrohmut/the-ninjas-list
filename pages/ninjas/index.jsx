import StyledContainer from "./styles"

const Ninja = ninja => (
  <div>
    <a className="single">
      <h3>{ninja.name}</h3>
    </a>
  </div>
)

export default function NinjasPage({ ninjas }) {
  return (
    <StyledContainer>
      <h1>Ninjas Page</h1>
      {ninjas && ninjas.length > 0 && (
        <>
          {ninjas.map(ninja => (
            <Ninja key={ninja.id} {...ninja} />
          ))}
        </>
      )}
    </StyledContainer>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const ninjas = await response.json()
  return {
    props: {
      ninjas
    }
  }
}
