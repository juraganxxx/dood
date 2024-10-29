import { Link } from 'react-router-dom';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';
import Section from '../atoms/Section';
import CodeBlock from '../molecules/CodeBlock';

const WritingMarkupWithJSX = () => {
  return (
    <>
      <Section>
        <Heading level={2}>Menulis markup dengan JSX</Heading>
        <Paragraph>
          Sintaks markup yang Anda lihat di atas disebut JSX . Sintaks ini bersifat opsional, tetapi sebagian besar proyek React menggunakan JSX demi kenyamanannya. Semua alat yang kami rekomendasikan untuk pengembangan lokal mendukung JSX secara langsung.
        </Paragraph>

        <Paragraph>
          JSX lebih ketat daripada HTML. Anda harus menutup tag seperti <code>&lt;br /&gt;</code>. Komponen Anda juga tidak dapat mengembalikan beberapa tag JSX. Anda harus membungkusnya ke dalam induk bersama, seperti a <code>&lt;div&gt; . . . &lt;/div&gt;</code> atau pembungkus kosong <code>&lt;&gt;...&lt;/&gt;</code>.
        </Paragraph>

        <CodeBlock code={`function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}`}/>

      <Paragraph>
        Jika Anda memiliki banyak HTML untuk dipindahkan ke JSX, Anda dapat menggunakan konverter daring <a href='https://transform.tools/html-to-jsx' target='_blank' className='hover:text-blue-600 underline'>konverter daring</a>.
      </Paragraph>
      </Section>

      <Section>
        <Heading level={2}>menambahkan gaya</Heading>
        <Paragraph>
          Dalam React, Anda menentukan kelas CSS dengan className. Cara kerjanya sama seperti classatribut HTML:
        </Paragraph>

        <CodeBlock code={`<img className="avatar" />`}/>

      <Paragraph>
        Kemudian Anda menulis aturan CSS untuknya dalam file CSS terpisah:
      </Paragraph>
      <CodeBlock code={`/* In your CSS */
.avatar {
  border-radius: 50%;
}`}/>
      </Section>
    </>
  );
};

export default WritingMarkupWithJSX;
