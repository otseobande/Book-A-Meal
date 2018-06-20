const items = document.querySelectorAll('i.z');

const getToggleReduce = (index) => {
  const item = items[index];
  return (() => item.classList.toggle('bounceIn'));
};

const getToggleExpand = (index) => {
  const item = items[index];
  return (() => item.classList.toggle('bounceOut'));
};

const animateHungry = () => {
  let timeConterIndex = 0;
 	for (timeConterIndex; timeConterIndex < items.length; timeConterIndex++) {
	    const toggleItemMove = getToggleReduce(timeConterIndex);
	    setTimeout(toggleItemMove, timeConterIndex * 250);
  }
};

setInterval(animateHungry, 2500);
