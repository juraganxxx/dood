const CodeBlock = ({code}) => {
  return (
    <pre className="p-2 mb-4 text-xs  rounded text-[#abb2bf] bg-[#333]">
      <code className="py-4">
        {code}
      </code>
    </pre>
  )
}

export default CodeBlock;