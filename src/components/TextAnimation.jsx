import { TypeAnimation } from "react-type-animation"

const TextAnimation = () => {
  return (
    <div>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'I am a Explorer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'I am a Frontend Developer',
        1000,
        'I am a Backend Developer',
        1000,
        'I am a UI/UX designer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1.5em', display: 'inline-block' }}
      repeat={Infinity}
      className=" animate-textGlow"
    />
    </div>
  )
}

export default TextAnimation