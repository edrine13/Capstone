import React from 'react';
import style from './TeamSection.module.css';
import MemberCard from '../card/MemberCard';
import reyn from '../../images/team/3.jpg';
import p1 from '../../images/team/1.png';
import p2 from '../../images/team/2.png';

const MEMBERS = [
  {
    name: 'Reynaldo Delima',
    team: 'Team WD31',
    id: 1,
  },
  { name: 'Jeorge Santos', team: 'Team WD31', id: 2 },
  { name: 'Edrine Rubio', team: 'Team WD31', id: 3 },
];

const TeamSection = () => {
  return (
    <section id="team" className={`team ${style['section-bg']}`}>
      <div className="container" data-aos="fade-up">
        <div className={`${style['section-title']} my-4 text-center`}>
          <h3>
            Our Hardworking <span>Team</span>
          </h3>
        </div>

        <div className="row ">
          <MemberCard
            name={'Reynaldo Delima'}
            team={'Team WD31'}
            image={reyn}
          />
          <MemberCard name={'Jeorge Santos'} team={'Team WD31'} image={p1} />
          <MemberCard name={'Edrine Rubio'} team={'Team WD31'} image={p2} />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
