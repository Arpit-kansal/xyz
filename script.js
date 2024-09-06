document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            alert('Happy Birthday! 🎉');
        });
    });
});

// Next Page
<script>
  window.onscroll = function() {
    var link = document.querySelector('.next-page-link');
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2) {
      link.classList.add('show-next-link');
    } else {
      link.classList.remove('show-next-link');
    }
  };
</script>
