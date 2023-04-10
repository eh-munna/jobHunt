import React from 'react';

const Blog = () => {
  return (
    <div className="container mx-auto py-4 md:py-0 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 py-7 md:py-12">
        <div className="p-7 mb-4 rounded-lg bg-[#edeeff] space-y-4 md:space-y-6">
          <h3 className="text-[#1A1919] font-semibold">
            When should you use context API?
          </h3>
          <p className="text-[#757575]">
            I would use context API when I want to share data with many
            components at different nesting levels. When the same prop (data) is
            passed through several components as an intermediate. When the state
            is changed by many components, in this case, it's complicated for
            each change to deliver the new data to other components manually.
            Then I use context API. It will help me to connect those nested
            components to the same global state
          </p>
        </div>
        <div className="p-7 mb-4 rounded-lg bg-[#edeeff] space-y-4 md:space-y-6">
          <h3 className="text-[#1A1919] font-semibold">
            What is a custom hook?
          </h3>
          <p className="text-[#757575]">
            Custom Hook is a JavaScript function which we create by ourselves,
            when we want to share logic between other JavaScript functions. It
            allows you to reuse some piece of code in several parts of your app
          </p>
        </div>
        <div className="p-7 mb-4 rounded-lg bg-[#edeeff] space-y-4 md:space-y-6">
          <h3 className="text-[#1A1919] font-semibold">What is useRef?</h3>
          <p className="text-[#757575]">
            useRef is a function which takes a maximum of one argument and
            returns an Object. The returned object has a property called current
            whose value is the argument passed to useRef. If you invoke it
            without an argument, the returned object's current property is set
            to undefined
          </p>
        </div>
        <div className="p-7 mb-4 rounded-lg bg-[#edeeff] space-y-4 md:space-y-6">
          <h3 className="text-[#1A1919] font-semibold">What is useMemo?</h3>
          <p className="text-[#757575]">
            useMemo is a React hook that memorizes the output of a function.
            useMemo accepts two arguments: a function and a list of
            dependencies. useMemo will call the function and return its return
            value
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
