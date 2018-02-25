import sys

def main():
    input_data = sys.stdin.readline()
    if input_data:
        sys.stdout.write('Python received: ' + input_data)
        print('You have found snakes')
        sys.stdout.flush()

if __name__ == '__main__':
    main()