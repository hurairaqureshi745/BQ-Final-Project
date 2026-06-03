export function ContactForm() {
  return (
    <form aria-label="Project inquiry form">
      <fieldset>
        <legend>Tell Digital Sphere about your project</legend>

        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Your full name" />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="you@example.com" />

        <label htmlFor="service">Service interest</label>
        <select id="service" name="service" defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          <option value="web-development">Web Development</option>
          <option value="graphic-design">Graphic Design</option>
          <option value="digital-marketing">Digital Marketing</option>
          <option value="cyber-security">Cyber Security</option>
          <option value="app-development">App Development</option>
        </select>

        <label htmlFor="message">Project goals</label>
        <textarea
          id="message"
          name="message"
          placeholder="Share your goals, timeline, and what success should look like."
        />

        <button type="submit">Send project inquiry</button>
      </fieldset>
    </form>
  )
}
