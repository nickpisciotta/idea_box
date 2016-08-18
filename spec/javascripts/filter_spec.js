// require filter

describe('filterSearch', function () {
  it('can remove filter ideas', function () {
    
  });
});


function setUpIdeas(){
  var ideas = document.createElement('div');
  ideas.className = 'ideas';
  var idea1 = document.createElement('div');
  idea1.className = 'idea';
  ideas.appendChild(idea1);
  var idea2 = document.createElement('div');
  idea2.className = 'idea';
  ideas.appendChild(idea2);
  var idea3 = document.createElement('div');
  idea3.className = 'idea old';
  ideas.appendChild(idea3);
  return ideas;
}
