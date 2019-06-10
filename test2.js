const Course = require('./models/course');
const Subscriber = require('./models/subscriber');

let testCourse, testSubscriber;

Course.create({
   title: 'Tomato Land',
   description: 'locally farmed tomato only',
   zipCode: 12345,
   items: ['cherry', 'heirloom']
}).then((course) => testCourse = course);


Subscriber.findOne({})
   .then(subscriber => testSubscriber = subscriber);



testSubscriber.courses.push(testCourse);

testSubscriber.save();


Subscriber.populate(testSubscriber, "Courses")
   .then(subscriber => console.log(subscriber));