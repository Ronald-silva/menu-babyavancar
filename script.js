        // Animação de entrada dos cards
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Aplicar animação aos cards
        document.querySelectorAll('.category-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease-out';
            observer.observe(card);
        });

        // Efeito de hover nos itens do menu
        document.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateX(5px)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateX(0)';
            });
        });

        // Efeito de clique no botão de contato
        document.querySelector('.contact').addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });

        // Adicionar efeito de brilho aos preços
        document.querySelectorAll('.item-price').forEach(price => {
            price.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 0 20px rgba(76,175,80,0.6)';
                this.style.transform = 'scale(1.05)';
            });
            
            price.addEventListener('mouseleave', function() {
                this.style.boxShadow = 'none';
                this.style.transform = 'scale(1)';
            });
        });