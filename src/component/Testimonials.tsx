import React from 'react';
import brand from'../assets/Styles/Testimonials.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Athi from "../assets/Images/Athii.jpeg";
import Reece from "../assets/Images/Reece.jpeg";
import Umayr from "../assets/Images/Umayr.jpeg";
import Meez from "../assets/Images/Meez.jpeg";
import Gift from "../assets/Images/Gift.jpg";
import Joel from "../assets/Images/Joel.jpg"

interface Testimonial {
  id: number;
  name: string;
  text: string;
  Image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 0,
    name: "Athenkosi Freddie",
    text: "Asandile is a super nice person who is open & wise. He is always open to helping others and He is not afraid to express himself. He is a visionary and futurist, He is always open to learning about the people around annd also an amzing conversationalist. I am glad to know him as a person",
    Image: Athi,
  },
  {
    id: 1,
    name: "Umayr Nordien",
    text: "I know I can count on Asandile to work with me on both large and small projects. He is loyal to his ethical conduct and, based on my professional experience, does not deviate from these values. He is easy-going, and caring, with a strong mentality and always ready to help others",
    Image: Umayr,
  },
  {
    id: 2,
    name: "Reece Simon",
    text: "For the short time I know Asandile he has been significantly amliorative towards assisting me. Definately is going to be successful going forward",
    Image: Reece,
  },
  {
    id: 3,
    name: "Joel Mukanya",
    text: "Asandile is a very creative and well-behaved student. He does enjoy working with his classmates and works well on his project. He has gained knowledge of web development, including Bootstrap 5. I will be very delighted to see him get hired.",
    Image: Joel,
  },
  {
    id: 4,
    name: "Meezan Davids",
    text: "Asandile seems like a very nice guy to be in the presence. He is very good at sport and has a lot of takes on a lot of topics. Asandile looks like a respectable guy and will always be at help when in the need.",
    Image: Meez,
  },
  {
    id: 5,
    name: "Gift Mahlangu",
    text: "Asandile is a smart and reliable person, who is always on time in class and gives 100% effort to his work and projects. He is a great team player and is always available to assist his peers, and also works well on his own. He would be a great asset to any company.",
    Image: Gift,
  },
];

const Testimonials: React.FC = () => {
  return (
    <div id="testimonials">
      <h1 className={brand.heading}>TESTIMONIALS</h1>
      <div className={brand.testy}>
        {testimonials.map((item) => (
          <div className="card" style={{ width: '18rem' }} key={item.id}>
            <img src={item.Image} className={brand.cardImgTop} alt="photo" />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
