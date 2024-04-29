// Dark / light switcher
const themeToggleBtn = document.getElementById('theme-toggle')
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon')
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon')

if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  // if the color theme in local storage is set to dark || color-theme is not in local storage && the OS is set to dark mode
  themeToggleLightIcon.classList.remove('hidden') // Show light icon
} else {
  themeToggleDarkIcon.classList.remove('hidden')  // Show dark icon
}

// Listen for toggle button click
themeToggleBtn.addEventListener('click', toggleMode)

function toggleMode() {
  // Toggle icon
  themeToggleDarkIcon.classList.toggle('hidden')
  themeToggleLightIcon.classList.toggle('hidden')

  // If is set in localstorage
  if (localStorage.getItem('color-theme')) {
    // If light, make dark and save in localstorage
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    }
  } else {
    // If not in localstorage (check the html tag class)
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    }
  }
}
