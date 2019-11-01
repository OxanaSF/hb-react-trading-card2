var tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg'
  },

  {
    name: 'Float',
    skill: 'baking pretzels',
    imgUrl: '/static/img/float.jpg'
  },

  {
    name: 'Llambda',
    skill: 'knitting scarves',
    imgUrl: '/static/img/llambda.jpg'
  }
];


class TradingCardContainer extends React.Component {
  constructor(){
    super();
    this.state = { cards : []};
  }
  componentDidMount(){
    $.get('/cards.json',(res)=>{
          this.setState({cards: res.cards})
    });
  }
  render() {
    const paragraphs = [];

    for (const currentCard of this.state.cards) {

      if (currentCard.imgUrl === null){
          currentCard.imgUrl = '/static/img/placeholder.png';
        }
      paragraphs.push(
        <TradingCard
          key={currentCard.name}
          name={currentCard.name}
          skill={currentCard.skill}
          imgUrl={currentCard.imgUrl}
        />
      );
    }

    return (
      <div>{paragraphs}</div>
    );
  }
}

class TradingCard extends React.Component {
  render() {
    return (
      <div className="card">
        <p>Name: {this.props.name}</p>
        <img src={this.props.imgUrl} />
        <p>Skill: {this.props.skill} </p>
      </div>
    );
  }
}


ReactDOM.render(
  <TradingCardContainer />,
  document.getElementById('container')
);
