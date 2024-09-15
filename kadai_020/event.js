
document.addEventListener('DOMContentLoaded', () => {
    // ボタンに代入
    const button = document.getElementById('btn');
    const text = document.getElementById('text');
  
    // ボタンをクリック
    button.addEventListener('click', () => {
      text.textContent = 'ボタンがクリックされました！';
    });
  });