import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';
import Section from '../atoms/Section';
import CodeBlock from '../molecules/CodeBlock';

const CreatingAndNestingComponents = () => {
  return (
    <>
      <Section>
        <Heading level={2}>membuat dan menumpuk komponen</Heading>
        <Paragraph>
          Aplikasi React dibuat dari komponen-komponen . Komponen adalah bagian dari UI (antarmuka pengguna) yang memiliki logika dan tampilannya sendiri. Komponen bisa sekecil tombol, atau sebesar keseluruhan halaman.
        </Paragraph>

        <Paragraph>Komponen React adalah fungsi JavaScript yang mengembalikan markup:</Paragraph>

        <CodeBlock code={`function MyButton() {
  return (
    <button>I'm a button</button>
  );
}`}/>
        <Paragraph>
        Sekarang setelah Anda mendeklarasikannya MyButton, Anda dapat menumpuknya ke komponen lain:
        </Paragraph>

        <CodeBlock code={`export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}`}/>

      <Paragraph>
        Perhatikan bahwa ini <code>&lt;MyButton /&gt;</code> diawali dengan huruf kapital. Itulah cara Anda mengetahui bahwa ini adalah komponen React. Nama komponen React harus selalu diawali dengan huruf kapital, sedangkan tag HTML harus diawali dengan huruf kecil.
      </Paragraph>

      <Paragraph>Lihatlah hasilnya:</Paragraph>

      <CodeBlock code={`function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}`}/>
      <Paragraph>
        Kata export defaultkunci menentukan komponen utama dalam berkas. Jika Anda tidak familier dengan beberapa sintaksis JavaScript, MDN dan javascript.info memiliki referensi yang bagus.
      </Paragraph>
      </Section>
    </>
  );
};

export default CreatingAndNestingComponents;
