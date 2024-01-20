import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    capitalId: countryAndCapitalsList[0].id,
  }

  onChangeOption = event => {
    this.setState({capitalId: event.target.value})
  }

  render() {
    const {capitalId} = this.state
    const countryOfThatCapital = countryAndCapitalsList.find(
      eachItem => eachItem.id === capitalId,
    )
    console.log(countryOfThatCapital)
    return (
      <div className="bgContainer">
        <div className="cardContainer">
          <h1 className="countryheading">Countries And Capitals</h1>
          <div className="selectConatiner">
            <select onChange={this.onChangeOption}>
              {countryAndCapitalsList.map(eachItem => (
                <option
                  key={eachItem.id}
                  className="optionstyle"
                  value={eachItem.id}
                >
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para">is capital of which country?</p>
          </div>
          <h2 className="capitalhead">{countryOfThatCapital.country}</h2>
        </div>
      </div>
    )
  }
}

export default Capitals
