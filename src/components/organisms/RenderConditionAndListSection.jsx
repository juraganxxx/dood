import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';
import Section from '../atoms/Section';
import CodeBlock from '../molecules/CodeBlock';

const RenderConditionAndList = () => {
  const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];
  return (
    <>
      <Section>
        <Heading level={2}>Render Bersyarat</Heading>
        <Paragraph>
          Dalam React, tidak ada sintaks khusus untuk menulis kondisi. Sebaliknya, Anda akan menggunakan teknik yang sama seperti yang Anda gunakan saat menulis kode JavaScript biasa. Misalnya, Anda dapat menggunakan ifpernyataan untuk menyertakan JSX secara kondisional:
        </Paragraph>

        <CodeBlock code={`let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>
);`}/>

        <Paragraph>
          Jika Anda lebih suka kode yang lebih ringkas, Anda dapat menggunakan operator kondisional ?. Tidak seperti if, operator ini bekerja di dalam JSX:
        </Paragraph>

        <CodeBlock code={`<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>`}/>
        <Paragraph>
          Jika Anda tidak memerlukan elsecabang, Anda juga dapat menggunakan sintaksis logika&& yang lebih pendek :
        </Paragraph>
        
        <CodeBlock code={`<div>
  {isLoggedIn && <AdminPanel />}
</div>`}/>
        <Paragraph>
          Semua pendekatan ini juga berfungsi untuk menentukan atribut secara kondisional. Jika Anda tidak terbiasa dengan beberapa sintaksis JavaScript ini, Anda dapat memulai dengan selalu menggunakan if...else.
        </Paragraph>
      </Section>

      <Section>
        <Heading level={2}>Membuat daftar</Heading>
        <Paragraph>
          Anda akan mengandalkan fitur JavaScript seperti forloop dan fungsi arraymap() untuk menyajikan daftar komponen.
        </Paragraph>

        <Paragraph>Misalnya, katakanlah Anda memiliki serangkaian produk:</Paragraph>

        <CodeBlock code={`const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];`}/>

        <Paragraph>
          Di dalam komponen Anda, gunakan map() fungsi untuk mengubah serangkaian produk menjadi serangkaian <code>{`<li>`}</code> item:
        </Paragraph>

        <CodeBlock code={`const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

return (
  <ul>{listItems}</ul>
);`}/>
        <Paragraph>
          Perhatikan bagaimana <code>{`<li>`}</code> atributnya key. Untuk setiap item dalam daftar, Anda harus meneruskan string atau angka yang secara unik mengidentifikasi item tersebut di antara saudaranya. Biasanya, kunci harus berasal dari data Anda, seperti ID basis data. React menggunakan kunci Anda untuk mengetahui apa yang terjadi jika Anda kemudian memasukkan, menghapus, atau menyusun ulang item tersebut.
        </Paragraph>
        
        <CodeBlock code={`const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}
`}/>
        <section className='mb-5 rounded-md pl-5 py-3 bg-gray-100'>
          <ul>
            {products.map(product => (
              <li
                key={product.id}
                style={{
                  color: product.isFruit ? 'magenta' : 'darkgreen'
                }}
              >
                {product.title}
              </li>
            ))}
        </ul>
        </section>
      </Section>
    </>
  );
};

export default RenderConditionAndList
;
