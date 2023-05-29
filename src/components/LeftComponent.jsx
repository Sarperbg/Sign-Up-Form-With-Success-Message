import { useState } from 'react';
import { ReactComponent as FillCheckCircle } from '../assets/images/icon-list.svg';
import validate from '../validation/validate'

const LeftComponent = () => {
    const [email, setEmail] = useState('');
    const [isError, setIsError] = useState(false);
  
    const inputHandler = (e) => {
      setEmail(e.target.value);
    };
  
    const formSubmitHandler = (e) => {
      e.preventDefault();
  
      const isValidate = validate(email);
  
      if (!isValidate) {
        setIsError(true);
      } else {
        setEmail('');
        setIsError(false);
      }
    };
    return (
        <div className='flex flex-col w-1/2 m-4 p-4'>
            <div className='flex flex-col  border-red-900'>
                <h1 class="text-5xl font-bold mt-16 justify-center text-center">
                    Stay updated!
                </h1>
                <p className="py-5 ml-10 text-sm text-bg-color mobile:text-base">
                    Join 60,000+ product managers receiving monthly updates on:
                </p>
            </div>
            <div className='flex items-center mt-4 font-bold gap-4 pb-2 text-sm'>
                <ul className="pt-2 ml-10">
                    <li className='flex gap-4 pb-2'>
                        <FillCheckCircle aria-hidden="true" focusable="false" className="icons" />
                        Product discovery and building what matters
                    </li>
                    <li className="flex gap-4 pb-2">
                        <FillCheckCircle aria-hidden="true" focusable="false" className="icons" />
                        Measuring to ensure updates are a success
                    </li>
                    <li className="flex gap-4 pb-2">
                        <FillCheckCircle aria-hidden="true" focusable="false" className="icons" />
                        And much more!
                    </li>

                </ul>
            </div>
            <form>
                <div className='mt-6 relative'>
                    <label htmlFor="email" className="text-xs font-bold m-6 p-4">
                        Email address
                    </label>
                    <input
                        id="email"
                        type="text"

                        placeholder="email@company.com"
                        className={`border mt-2 ml-4 px-4 py-3 w-full h-16 rounded-md outline-none ${'focus:border-semi-grey'
                            }`}
                        aria-describedby="error-message"
                        required
                    />
                </div>
                <button className="bg-semi-grey mt-6 ml-2 text-white px-2 py-4 w-full rounded-md transition-all ease-out duration-300 hover:bg-gradient-to-r from-rose-500 to-primary hover:shadow-lg hover:shadow-rose-500/50">
                    Subscribe to monthly newsletter
                </button>

            </form>

        </div>

    )
}

export default LeftComponent