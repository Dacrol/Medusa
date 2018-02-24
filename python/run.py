import sys

def main():
    input = sys.stdin.readline()
    if input:
        sys.stdout.write('Python received: ' + input)
        print('You have found snakes')
        sys.stdout.flush()

if __name__ == '__main__':
    main()