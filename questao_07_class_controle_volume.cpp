#include <iostream>
#include <locale>
#include <windows.h>

using namespace std;

class ControleVolume {
private:
    int volume;

public:
    ControleVolume(){
        volume = 2;
    }

    void aumentarVolume() {
        if (volume + 2 <= 10) {
            volume += 2;
        } else {
            cout << "Não foi possível aumentar o volume: Volume máximo!!" << endl;
        }
    }

    void diminuirVolume() {
        if (volume - 2 >= 0) {
            volume -= 2;
        } else {
            cout << "Não foi possível diminuir o volume: Volume mínimo!!" << endl;
        }
    }

    int lerVolume() {
        return volume;
    }
};

int main() {
    setlocale(LC_ALL, "pt_BR.UTF-8");//Comando para aceitar os caracteres no padrão UTF-8 aqui com c++
    SetConsoleOutputCP(CP_UTF8);
    
    ControleVolume smartfone;

    smartfone.aumentarVolume();
    smartfone.aumentarVolume();
    smartfone.aumentarVolume();

    cout << "O volume atual é de: " << smartfone.lerVolume() << endl;

    smartfone.diminuirVolume();
    smartfone.diminuirVolume();
    smartfone.diminuirVolume();

    cout << "O volume atual é de: " << smartfone.lerVolume() << endl;

    smartfone.diminuirVolume();
    smartfone.diminuirVolume();  // Teste de mensagem de erro

    return 0;
}
