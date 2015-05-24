var YomiApp = React.createClass({
  render: function() {
    var message="lets do this";
    return (
      <SimpleRandom />
    );
  }
});


var rand = function(min, max) {
  return Math.random() * (max -min) +min;
};


var SimpleRandom = React.createClass({
  getInitialState: function() {
    // set weights - just all evenly distributed

    return {randomNum: null,
      moveChoice: null,
      availableWeight: 1.0,
      weights: {
        'attack': 0,
        'throw' : 0,
        'block' : 0,
        'dodge' : 0}
      }
  },
  getMoveChoice: function() {
    // get randomNum 1to100

    var weightsList = [];
    var moveList = [];

    weightsData = this.state.weights;

    // if randomNum this.state.weights.throw
    // if
    Object.keys(weightsData).forEach(function(key) {
      moveList.push(key);
      weightsList.push(weightsData[key]);
    });

    var total_weight = weightsList.reduce(function(previous, current, i, arr) {
      return previous + current;
    });


    var random_num = rand(0, total_weight);
    this.setState({'randomNum': random_num });
    // console.log(random_num);
    var weight_sum = 0;
    for (var i=0; i < moveList.length; i+=1) {
      weight_sum += weightsList[i];
      weight_sum = +weight_sum.toFixed(2);

      if (random_num <= weight_sum) {
        this.setState({moveChoice: moveList[i]});
        break;
      }
    }

  },
  weightChange: function(val, sliderName) {
    // TODO: clean this up. Don't need this many variables.
    // Just making it very explicit for now.

    var oldWeights = this.state.weights
    var currentAvailableWeight = this.state.availableWeight;

    var currentWeightValue = oldWeights[sliderName];
    var updatedWeightValue = parseInt(val, 10) / 100;

    var weightDifference = currentWeightValue - updatedWeightValue;

    // compare last weight with current weight
    currentAvailableWeight += weightDifference;
    oldWeights[sliderName] = updatedWeightValue;

    this.setState({
      availableWeight: currentAvailableWeight,
      weights: oldWeights});

  },
  getSliderMax: function(sliderName) {
    var currentAvailableWeight = this.state.availableWeight * 100;
    var currentSliderWeight = this.state.weights[sliderName] * 100;
    return currentAvailableWeight + currentSliderWeight;
  },

  render: function() {
    // click a button then displays a random number
    return (

      <div>
        <p>{this.state.randomNum}</p>
        <p>{this.state.moveChoice}</p>
        <button onClick={this.getMoveChoice}>Go!</button>
        <div>
        <h3>Available Weight Left: {this.state.availableWeight}</h3>
        <WeightSlider
          sliderName="attack"
          value={this.state.weights.attack}
          changeHandler={this.weightChange}
          sliderMax={this.getSliderMax('attack')} />
        <WeightSlider
          sliderName="throw"
          value={this.state.weights.throw}
          changeHandler={this.weightChange}
          sliderMax={this.getSliderMax('throw')} />
        <WeightSlider
          sliderName="block"
          value={this.state.weights.block}
          changeHandler={this.weightChange}
          sliderMax={this.getSliderMax('block')} />
        <WeightSlider
          sliderName="dodge"
          value={this.state.weights.dodge}
          changeHandler={this.weightChange}
          sliderMax={this.getSliderMax('dodge')} />
        </div>
      </div>);

  }
});

var WeightSlider = React.createClass({
  getInitialState: function() {
    return { value: 0};
  },
  handleSliderChange: function(event) {

    var sliderName = this.props.sliderName;
    // var sliderValue = React.findDOMNode(this.refs[sliderName]).value;
    // this.setState({value: event.target.value});
    var updatedValue = event.target.value;
    this.props.changeHandler(updatedValue, sliderName);
    this.setState({value: updatedValue});
  },
  render: function() {
    var sliderName = this.props.sliderName;
    return (
      <span>
      <p>{sliderName} range: {this.state.value} %</p>
      <input
        onChange={this.handleSliderChange}
        type="range"
        value={this.state.value}
        ref={this.props.sliderName}
        name={this.props.sliderName}
        min="0" max={this.props.sliderMax} />
      </span>
    );
  }
});


React.render(
  <YomiApp  />,
  document.getElementById('container')
);

