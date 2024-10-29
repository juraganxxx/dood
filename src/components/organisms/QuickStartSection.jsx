import { Link } from 'react-router-dom';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';
import Section from '../atoms/Section';

const QuickStartSection = () => {
  return (
    <section>
      <Section>
        <Heading level={2}>Mulai Cepat</Heading>
        <Paragraph>
          Selamat datang di dokumentasi React! Halaman ini akan memberikan Anda pengenalan terhadap 80% konsep React yang akan Anda gunakan setiap hari.
        </Paragraph>
      </Section>

      <Section>
        <Heading level={2}>Anda akan belajar</Heading>
          <ul className='list-disc ml-10 text-[#333]'>
            <Link to={`/creating-and-nesting-components`}><li>How to Creat and Nest Component</li></Link>
            <li>How to add markup and styles</li>
            <li>How to display data</li>
            <li>How to render conditions and lists</li>
            <li>How to respond to events and update the screen</li>
            <li>How to share data between components</li>
          </ul>
      </Section>
    </section>
  );
};

export default QuickStartSection;
