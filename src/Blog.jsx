import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeHighlight from "rehype-highlight";

export default function BlogPage() {
    const blogContent = "# Dynamic scripting with JavaScript\n## **Overview: Core learning modules**\nNext\nJavaScript is a huge topic, with so many different features, styles, and techniques to learn, and so many APIs and tools built on top of it. This module focuses mostly on the essentials of the core language, plus some key surrounding topics — learning these topics will give you a solid basis to work from.\n\nPrerequisites\nBefore starting this module, you don't need any previous JavaScript knowledge, but you should have worked through the previous modules in the course. You should at least know HTML and the basic fundamentals of CSS.\n\n\n```\nconst single = 'Single quotes';\n\nconst double = \"Double quotes\";\n\nconst backtick = `Backtick`;\n\nconsole.log(single);\n\nconsole.log(double);\n\nconsole.log(backtick);\n```\n\nNote: If you are working on a computer/tablet/other device where you don't have the ability to create your own files, you could try out (most of) the code examples in an online coding program such as JSBin or Glitch.\n\nTutorials and challenges\nWhat is JavaScript?\nWelcome to the MDN beginner's JavaScript course! In this first article we will look at JavaScript from a high level, answering questions such as \"what is it?\", and \"what is it doing?\", and making sure you are comfortable with JavaScript's purpose.\n\nA first splash into JavaScript\nNow you've learned something about the theory of JavaScript, and what you can do with it, we are going to give you a crash course on the basic features of JavaScript via a completely practical tutorial. Here you'll build up a simple \"Guess the number\" game, step by step.\n\nWhat went wrong? Troubleshooting JavaScript\nWhen you built up the \"Guess the number\" game in the previous article, you may have found that it didn't work. Never fear — this article aims to save you from tearing your hair out over such problems by providing you with some simple tips on how to find and fix errors in JavaScript programs.\n\nStoring the information you need — Variables\nAfter reading the last couple of articles you should now know what JavaScript is, what it can do for you, how you use it alongside other web technologies, and what its main features look like from a high level. In this article, we will get down to the real basics, looking at how to work with the most basic building blocks of JavaScript — Variables.\n\nBasic math in JavaScript — numbers and operators\nAt this point in the course, we discuss maths in JavaScript — how we can combine operators and other features to successfully manipulate numbers to do our bidding.\n\nHandling text — strings in JavaScript\nNext, we'll turn our attention to strings — this is what pieces of text are called in programming. In this article, we'll look at all the common things that you really ought to know about strings when learning JavaScript, such as creating strings, escaping quotes in strings, and joining them together.\n\n";

 return (
        <section className="text-[#c0c0c0] p-4">
            <div className="prose prose-invert max-w-none"> {/* prose-invert for dark backgrounds */}
                <ReactMarkdown
                    rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeHighlight]}
                >
                    {blogContent}
                </ReactMarkdown>
            </div>
        </section>
    );
}