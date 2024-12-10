import React from "react";

export const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1> Personalized workout sessions </h1>
        <p>
          Discover the power of customized training designed just for you. Our
          expert trainers create sessions tailored to your goals, whether you're
          a beginner or an athlete, ensuring every workout counts.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <div className="bootcamps">
          <div>
            <h4>Strength & Endurance Bootcamp</h4>
            <p>
              Build muscle, boost stamina, and challenge yourself with this
              high-energy bootcamp. Perfect for those who want to level up their
              strength and endurance.
            </p>
          </div>
          <div>
            <h4>Cardio Blast Sessions</h4>
            <p>
              Get your heart racing and burn calories fast with our intense
              cardio-focused workouts. It's time to sweat and feel energized
              like never before.
            </p>
          </div>
          <div>
            <h4>Core & Flexibility Training</h4>
            <p>
              Strengthen your core and improve your flexibility with exercises
              designed to enhance balance and prevent injuries. A must for every
              fitness journey.
            </p>
          </div>
          <div>
            <h4>Weight Loss Bootcamp</h4>
            <p>
              Kickstart your weight loss goals with structured programs that
              combine effective workouts and nutrition tips. Transform your
              lifestyle one session at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
