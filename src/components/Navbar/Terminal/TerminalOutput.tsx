"use client";

interface TerminalOutputProps {
 line: string;
}

const TerminalOutput: React.FC<TerminalOutputProps> = ({ line }) => {
 return <div className="terminal-line">{line}</div>;
};

export default TerminalOutput;
