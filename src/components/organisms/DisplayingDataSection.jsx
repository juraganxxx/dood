import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';
import Section from '../atoms/Section';
import CodeBlock from '../molecules/CodeBlock';

const DisplayingData = () => {
  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };
  return (
    <>
      <Section>
        <Heading level={2}>Menulis markup dengan JSX</Heading>
        <Paragraph>
          JSX memungkinkan Anda memasukkan markup ke dalam JavaScript. Tanda kurung kurawal memungkinkan Anda "kembali" ke JavaScript sehingga Anda dapat menyematkan beberapa variabel dari kode Anda dan menampilkannya kepada pengguna. Misalnya, ini akan menampilkan user.name:
        </Paragraph>

        <CodeBlock code={`return (
  <h1>
    {user.name}
  </h1>
);`}/>

        <Paragraph>
          Anda juga dapat "melarikan diri ke JavaScript" dari atribut JSX, tetapi Anda harus menggunakan kurung kurawal alih-alih tanda kutip. Misalnya, className="avatar"meneruskan "avatar"string sebagai kelas CSS, tetapi <code>{`src={user.imageUrl}`}</code> membaca nilai variabel JavaScript user.imageUrl, lalu meneruskan nilai tersebut sebagai srcatribut:
        </Paragraph>

        <CodeBlock code={`return (
    <img
      className="avatar"
      src={user.imageUrl}
    />
  );`}/>
        <Paragraph>
          Anda juga dapat meletakkan ekspresi yang lebih kompleks di dalam kurung kurawal JSX, misalnya, <a href="https://javascript.info/operators#string-concatenation-with-binary" target='_blank' className='hover:text-blue-600 underline'>penggabungan string :</a>
        </Paragraph>
        
        <CodeBlock code={`const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
`}/>
        <section className='mb-5 rounded-md flex justify-center items-center bg-gray-100'>
          <div className='my-3'>
            <h1 className='mb-2'>{user.name}</h1>
            <img
              className="avatar rounded-full"
              src={user.imageUrl}
              alt={'Photo of ' + user.name}
              style={{
                width: user.imageSize,
                height: user.imageSize
              }}
            />
          </div>
        </section>
        <Paragraph>
          Dalam contoh di atas, <code>{`style={{}}`}</code>  bukan sintaks khusus, tetapi {`{ }`} objek biasa di dalam style={ }kurung kurawal JSX. Anda dapat menggunakan style atribut ini saat gaya Anda bergantung pada variabel JavaScript.
        </Paragraph>
      </Section>
    </>
  );
};

export default DisplayingData;
