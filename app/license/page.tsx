import { Footer } from "@/lib/components/Footer";
import { Main } from "@/lib/components/ux/Main";
import { RootDiv } from "@/lib/components/ux/RootDiv";

export default function Page() {
  return (
    <RootDiv>
      <Main className="md:w-[65%] m-auto">
        <h1 className="text-3xl font-bold mb-4 self-center">MIT License</h1>
        <h2 className="mb-4 text-gray-400 self-center">
          Copyright (c) 2025 Jesse A. Johnson (Fizzog)
        </h2>
        <p>
          Permission is hereby granted, free of charge, to any person obtaining
          a copy of this software and associated documentation files (the
          &ldquo;Software&rdquo;), to deal in the Software without restriction,
          including without limitation the rights to use, copy, modify, merge,
          publish, distribute, sublicense, and/or sell copies of the Software,
          subject to the following conditions:
        </p>
        <ul className="list-disc pl-5 my-4">
          <li>
            <strong>Attribution Requirement:</strong> Any use of this software,
            including modified versions, must include clear attribution to the
            original author. This attribution must include:
            <ul className="list-disc pl-5 mt-2">
              <li>The author&apos;s name: Jesse A. Johnson (Fizzog)</li>
              <li>
                A link to the original GitHub repository: [Your GitHub URL]
              </li>
              <li>
                The author&apos;s contact email:{" "}
                <a
                  href="mailto:jesse@fizzog.io"
                  className="text-blue-400 underline"
                >
                  jesse@fizzog.io
                </a>
              </li>
              <li>A thank you note to me 🤗</li>
            </ul>
          </li>
          <li>
            The above copyright notice and this permission notice shall be
            included in all copies or substantial portions of the Software.
          </li>
        </ul>
        <p>
          THE SOFTWARE IS PROVIDED &ldquo;AS IS&rdquo;, WITHOUT WARRANTY OF ANY
          KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
          OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
          NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
          LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
          OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
          WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </p>
      </Main>
      <Footer />
    </RootDiv>
  );
}
