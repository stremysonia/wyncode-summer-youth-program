import React from 'react';
import './App.css';


class Github extends React.Component {
    state = {
        loading: true,
        github: {},
        repos: [],
}

class reqListener(e) => {
    data = JSON.parse(this.responseText);
    console.log(data);
}

fetchGithub = () => {
    fetch('https://api.github.com/users/stremysonia')
      .then(res => res.json())
      .then(data => this.setState({ github: data }))
}

fetchRepos = () => {
    fetch(
        'https://api.github.com/users/stremysonia/4e6e41b53f9ed213c9e312950fbdcda6cd5ec22a'
    )
        .then(res => res.json())
        .then(data => this.setState({repos: data, loading: false}))
}

render () {
        const { github, repos, loading } = this.state
        let filteredRepos =repos 
            .filter(repo => {
            return repo.name.toLowerCase().includes(this.state.search.toLowerCase())
        })
        
}


return (

)




      componentDidMount() {
          this.fetchGitHub()
          this.fetchRepos()
      }

      export default Github;
