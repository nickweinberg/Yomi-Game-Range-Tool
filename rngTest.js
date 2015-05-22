/* rng test */

var rand = function(min, max) {
  return Math.random() * (max -min) +min;
};

var getRandomItem = function(list, weights) {
  // add up all weights
  var total_weight = weights.reduce(function(previous, current, i, arr) {
    return previous + current;
  });

  var random_num = rand(0, total_weight);
  var weight_sum = 0;

  for (var i=0; i < list.length; i+=1) {
    weight_sum += weights[i];
    weight_sum = +weight_sum.toFixed(2);

    if (random_num <= weight_sum) {
      return list[i];
    }
  }
};

// var list = ['attack', 'throw','block','dodge'];
// var weights = [.4,.3,.1,.2];
// var random_choice = getRandomItem(list, weights);
// console.log(random_choice);

var t, a, b, d;
var numOptions = 4;



var weights = {
        'attack': .4,
        'throw':.3,
        'block': .1,
        'dodge': .2
}

Object.keys(weights).forEach(function(key) {
  console.log(key, weights[key]);
});