const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
      // ������ � ������ ����� btn-up_hide
      this.el.classList.remove('btn-up_hide');
    },
    hide() {
      // ������� � ������ ����� btn-up_hide
      this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
      // ��� ��������� ����������� ��������
      window.addEventListener('scroll', () => {
        // ���������� �������� ���������
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        // ���� �������� ���������� ������ ��� �� 400px, �� ������ ������ �������, ����� ��������
        scrollY > 0 ? this.show() : this.hide();
      });
      // ��� ������� �� ������ .btn-up
      document.querySelector('.btn-up').onclick = () => {
        // ���������� � ������ ��������
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  btnUp.addEventListener();