import fetch from 'isomorphic-unfetch'

const Index = (props) => (
   <ul>
      {props.shows.map(({show}) => (
        <li key={show.id}>
            <a>{show.name}</a>
        </li>
      ))}
    </ul>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index