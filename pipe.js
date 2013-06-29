  var post_1 = {
    //img:"http://placecage.com/c/100/100",
    title:"<i class='icon-film'></i> Now that we know who you are, I know who I am.",
    body:"Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water.",
    author:"Bill Murray"
  };
  var post_2 = {
    //img:"http://placecage.com/c/200/200",
    title:"You think water moves fast? You should see ice.",
    body:"This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. ",
    author:"Jackson Richardson"
  };
  var post_3 = {
    //img:"http://placecage.com/c/150/150",
    title:"<i class='icon-camera-retro'></i> The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. ",
    body:"Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.",
    author:"Lee van Cleef"
  };
  var post_fb = {
    img:"",
    title:'The <a href="#">path</a> of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men.',
    author:"Lee van Cleef",
    type:'fb',
    loves:34,
    age:"2"
  };
  var post_test = {
    //img:"simon.jpg",
    title:"Deine Mudder ist ein Astronaut",
    body:"Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water.",
    author:"Daniel",
    type:'fb',
    loves:100000,
    age:"0.1"
  };
  


  var posts = [
  post_fb,post_2,post_3,post_1,post_fb,post_2,post_3,post_1];


if (Meteor.isClient) {
  return Template.list.posts = posts;
  
}

