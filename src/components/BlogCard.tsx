import { motion } from 'framer-motion';
import blogDetails from '@/constants/blog';

const BlogCard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-between gap-14'>
      {blogDetails.map((blog) => (
        <motion.div
          key={blog.title}
          className='flex flex-col items-start justify-between bg-[#fafafa] shadow-md rounded-[10px] overflow-hidden hover:shadow-2xl transition ease-in-out duration-1000'
          whileHover={{ scale: 1.05 }}
        >
          <div className='blogCardImg'>
            <img src={blog.image} alt={blog.title} />
          </div>

          <div className='flex flex-col gap-4 px-6 py-6'>
            <h3 className='uppercase text-xl lg:text-2xl text-[#1d013b] leading-normal md:leading-normal lg:leading-normal'>
              {blog.title}
            </h3>
            <p className='text-slate-500 text-sm'>{blog.content}</p>

            <div className='flex items-center justify-between gap-4 mt-4 opacity-90 blogIcon'>
              <div className='flex items-center gap-1.5'>
                <img src={blog.authorIcon} alt={blog.author} width={21} height={25} />
                <p className='text-sm'>{blog.author}</p>
              </div>
              <div className='flex items-center gap-1.5'>
                <img src={blog.dayIcon} alt={blog.days} width={25} height={25} />
                <p className='text-sm'>{blog.days}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default BlogCard;
