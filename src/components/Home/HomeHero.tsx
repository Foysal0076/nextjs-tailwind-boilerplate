import Spinner from '@/components/Common/Spinner'

export const HomeHero = () => {
  return (
    <div className='container'>
      <div className='flex flex-col gap-6 lg:flex-row'>
        <div className='basis-1/2'>
          <h1 className='h1'>This is H1</h1>
          <h2 className='h2'>This is H2</h2>
          <h2 className='h3'>This is H3</h2>
          <h2 className='h4'>This is H4</h2>
          <h2 className='h5'>This is H5</h2>
          <h2 className='h6'>This is H6</h2>
          <br />
          <p className='mb-4 max-w-xl'>
            Default: I am a default paragraph Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quo nemo mollitia autem non assumenda,
            labore repellendus blanditiis illum iste aut voluptatem amet,
            temporibus aliquid dignissimos sunt eius nihil, magnam sequi.
          </p>
          <span className=''>I am a 100</span>
          <span className='mb-4 block max-w-xl font-extralight'>
            Weight 200: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quod laborum, iusto harum omnis consequatur obcaecati blanditiis
            voluptate deleniti unde adipisci?
          </span>
          <span className='mb-4 block max-w-xl font-light'>
            Weight 300: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium molestias soluta tempore dolor commodi obcaecati quo
            eaque maxime repellat unde veritatis, enim at rerum deserunt
            provident architecto, aut rem nulla?
          </span>
          <span className='mb-4 block max-w-xl font-normal'>
            Weight 400: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium molestias soluta tempore dolor commodi obcaecati quo
            eaque maxime repellat unde veritatis, enim at rerum deserunt
            provident architecto, aut rem nulla?
          </span>
          <span className='mb-4 block max-w-xl font-medium'>
            Weight 500: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium molestias soluta tempore dolor commodi obcaecati quo
            eaque maxime repellat unde veritatis, enim at rerum deserunt
            provident architecto, aut rem nulla?
          </span>
          <span className='mb-4 block max-w-xl font-semibold'>
            Weight 600: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium molestias soluta tempore dolor commodi obcaecati quo
            eaque maxime repellat unde veritatis, enim at rerum deserunt
            provident architecto, aut rem nulla?
          </span>
          <span className='mb-4 block max-w-xl font-bold'>
            Weight 700: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium molestias soluta tempore dolor commodi obcaecati quo
            eaque maxime repellat unde veritatis, enim at rerum deserunt
            provident architecto, aut rem nulla?
          </span>
          <span className='mb-4 block max-w-xl font-extrabold'>
            Weight 800: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium molestias soluta tempore dolor commodi obcaecati quo
            eaque maxime repellat unde veritatis, enim at rerum deserunt
            provident architecto, aut rem nulla?
          </span>
          <span className='mb-4 block max-w-xl font-black'>
            Weight 900: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium molestias soluta tempore dolor commodi obcaecati quo
            eaque maxime repellat unde veritatis, enim at rerum deserunt
            provident architecto, aut rem nulla?
          </span>
          <div className='my-8'>
            <Spinner className='text-current' />
          </div>
        </div>
        <div className='basis-1/2'>
          <h2 className='h2 mb-4 mt-8'>Unordered List examples</h2>
          <ul className='list-disc [&>li]:ml-4 md:[&>li]:ml-6'>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
              doloremque asperiores vero nesciunt adipisci nobis excepturi
              maxime? Veritatis, facilis quis.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero,
              dolores.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero,
              dolores.
            </li>
          </ul>
          <div className='mt-8' />
          <hr className='border-slate-900/10 dark:border-slate-300/10' />
          <div className='mt-4 h-32 w-32 rounded-lg border border-slate-900/10 bg-surface-100/50 shadow-md dark:border-slate-300/10'></div>
          <div className='mt-4 h-32 w-32 rounded-lg border border-slate-900/10 bg-surface-100/50 shadow-md dark:border-slate-300/10'></div>
        </div>
      </div>
    </div>
  )
}
