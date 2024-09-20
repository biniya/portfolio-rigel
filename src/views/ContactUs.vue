<template>
  <section class="w-full flex justify-center font-lexend bg-white py-4 md:py-10">
    <div class="w-11/12 lg:w-8/12 bg-white rounded-lg md:p-8">
      <h2 class="text-3xl lg:text-4xl font-semibold text-center mb-8">Contact Us</h2>
      <form @submit.prevent="sendEmail" class="space-y-3 md:space-y-6">
        <!-- Name Input -->
        <div>
          <label class="block text-sm md:text-lg font-medium text-gray-700">Name</label>
          <input
              type="text"
              v-model="formData.name"
              required
              class="w-full mt-1 p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your full name"
          />
        </div>

        <!-- Email Input -->
        <div>
          <label class="block text-sm md:text-lg font-medium text-gray-700">Email</label>
          <input
              type="email"
              v-model="formData.email"
              required
              class="w-full mt-1 p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email address"
          />
        </div>

        <!-- Message Input -->
        <div>
          <label class="block text-sm md:text-lg font-medium text-gray-700">Message</label>
          <textarea
              v-model="formData.message"
              required
              class="w-full mt-1 p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Type your message here"
              rows="6"
          ></textarea>
        </div>

        <!-- Submit Button -->
        <div class="text-center">
          <button
              type="submit"
              class="px-5 md:px-8 py-2 md:py-3 text-white bg-brand-350 hover:scale-105 rounded-2xl md:rounded-3xl focus:outline-none"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Form data reactive object
const formData = ref({
  name: '',
  email: '',
  message: ''
});

// Function to handle the Gmail redirection
const sendEmail = () => {
  const subject = encodeURIComponent(`New Message from ${formData.value.name}`);
  const body = encodeURIComponent(`Name: ${formData.value.name}\nEmail: ${formData.value.email}\n\nMessage:\n${formData.value.message}`);
  const recipient = "rigelsup@gmail.com";

  // Construct the Gmail compose URL
  const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;

  // Open Gmail compose in a new tab
  window.open(gmailComposeLink, '_blank');
};
</script>


<style scoped>
/* Add some padding for mobile responsiveness */
section {
  padding: 2rem 1rem;
}
</style>
