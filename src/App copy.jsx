import { useEffect, useState } from "react";
import Header from "./components/organisms/Header";
import { getVideos } from "./api";

function App() {
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getVideos();
        setFileList(response.result.files); // Ambil file dari respons
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatDuration = (length) => {
    const minutes = Math.floor(length / 60);
    const seconds = length % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`; // Menampilkan detik dengan leading zero
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-2">
      <Header />
      <div>
        <h3>Kawasan Jilbob</h3>
        <h1>Account Info</h1>
        {fileList.length > 0 ? (
          <ul>
            {fileList.map((file) => (
              <li key={file.file_code}>
                <h4>{file.title}</h4>
                <p>Duration: {formatDuration(file.length)}</p>
                <p>Views: {file.views}</p>
                <a href={file.download_url} target="_blank" rel="noopener noreferrer">
                  Download
                </a>
                <img src={file.single_img} alt={file.title} style={{ width: '100px' }} />
              </li>
            ))}
          </ul>
        ) : (
          <p>No videos available.</p>
        )}
      </div>
    </div>
  );
}

export default App;
