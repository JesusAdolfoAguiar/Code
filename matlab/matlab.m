% //The following are a series of functions that cover key core concepts of
% //the basics of matlabl programming.
% 
% ///By Jesus Aguiar///
% 
% ///1
% 
% This function calculates de area and the circumference
% of a circle with r radius.

function [a, c] = circle(r)
a = pi*r^2;
c = 2*pi*r;
end

% ///2
% 
% This function returns a matrix e with only the elements
% of even rows and columns of M.

function e = even_index(M)
e = M(2:2:end, 2:2:end);
end

% ///3
% 
% This function returns a row vector w that contains
% all elements of v in the opposite order.

function w = flip_it(v)
w = v(end:-1:1);
end
% 
% ///4
% 
% The function returns the n-by-n square subarray of
% N located at the top right corner of N.

function M = top_right(N,n)
M = N(1:n, end-n+1:end);
end

% ///5
% 
% The function returns the sum of the elements
% of an input matrix N that are on the “perimeter” of N.

function s = peri_sum(N)
s=sum([N(1:end-1,1)' N(end,1:end-1) N(2:end,end)' N(1,2:end)]);
end

% ///6
% 
% The function returns two row vectors t,d, where each
% element of t is the time in minutes that light would
% take to travel the distance in kilometers of each element
% of the row vector D, and where the elements of d are
% such distances in miles.

function [t,d] = light_speed(D)
t = (D/300000)/60;
d = D/1.609;
end

% ///7
% 
% The function returns the magnitude of an objects''
% acceleration, amag, based on the three-element F1,F2
% column vectors that represent two forces applied to a single object,
% and to the mass,m, of such object.


function amag = accelerate(F1,F2,m)
F = F1 + F2;
a = F./m;
b = a.^2;
c = sum(b);
amag = sqrt(c);
end

% ///8
% 
% The function returns the the overall income that a company generates in a week
% assuming a 6-day work week and two 8-hour long shifts per day, based on
% the number of products such company produces simultaneously, rate, and the
% per item price the product is sold, price.

function total = income(rate,price)
a = rate.*price;
b = a.*96;
total = sum(b);
end

% ///9
% 
% The function returns Q, a 2n-by-2m matrix, consisting of four n-by-m
% submatrices.The elements of the submatrix in the top left corner are all 0s, the
% elements of the submatrix at the top right are 1s, the elements in the bottom
% left are 2s, and the elements in the bottom right are 3s.

function Q = intquad(n,m)
q1 = zeros(n,m); q2 = ones(n,m); q3 = 2*ones(n,m); q4 = 3*ones(n,m);
Q = [q1 q2;q3 q4];
end

% ///10
% 
% The function returns a matrix F which elements represent the sine of the
% elements of matrix deg, and M, the average value of the elements of F.


function [F,M] = sindeg(deg)
rad = deg.*(pi/180);
F = sin(rad);
M = mean(F(:));
end


% ///11
% 
% The function returns a matrix S, where each element of the first, second
% third and fourth columns of S represents the mean, median, minimus and
% maximum of the corresponding row of N.

function S = simple_stats(N)
S = [mean(N,2),median(N,2),min(N,[],2),max(N,[],2)];
end

% ///12
% 
% The function returns orms, which is the square root of the mean of the
% squares of the first n positive odd integers.

function orms = odd_rms(n)
  orms = sqrt(mean((1:2:(2*n-1)).^2));
end

% ///13
% 
% The function takes as inputs the length lng of a straight fence and seg, the
% length of one segment of fencing material. Here, a segment needs to have a pole
% at both ends, but two neighboring segments always share a pole. The function
% returns n and p, the number of segments and poles respectively needed
% to build a fence of lenght lng.

function [n,p] = fence(lng,seg)
n = ceil((lng/seg));
p = n+1;
end


% ///14
% 
% The function returns the percentage of 0 elements in a matrix M, which only
% contains 0s and 1s.

function [n] = zero_stat(M)
numb = numel(M);
n = ((sum(M(:) == 0))/numb)*100;
end
% 
% ///15
% 
% The function creates a square matrix M of dimensions n whose elements are 0 except
% for 1s on the reverse diagonal from top right to bottom left.

function M = reverse_diag(n)
 Z = zeros(n);
 Z(1: n+1 : n^2)=1;
 M = flip(Z, 2);
end

% ///16
% 
% The function returns the sum of all the unique multiples of 3 or 5 up to n.

function s = sum3and5muls(n)
   s = sum(3:3:n)+sum(5:5:n)-sum(15:15:n);
end

% ///17
% 
% The function returns the eligibility an aplication to a university
% admission based on the percentiles of the verbal and quantitative portions
% of the GRE respectively, v and q. The applicant is eligible if the average
% percentile is at least 92% and both of the individual percentiles are over 88%.

function [output] = eligible(v,q)

m = (v+q)/2;
if (m>=92)&&(v>88&&q>88)
    output=true;
else
    output=false;
end
% 
% ///18
% 
% The function computes the bus fare one must pay in a given city based on the
% distance travelled d and the age a of the passenger. The fare is calculated as
% follows: the first mile is $2. Each additional mile up to a total of 10 miles is
% 25 cents. Each additional mile over 10 miles is 10 cents. Miles are rounded to
% the nearest integer other than the first mile which must be paid in full once
% a journey begins. A a 20% discount for children 18 or younger and seniors 60
% or older is applied.

function p = fare(d,a)
if d <= 1
    f = 2;
elseif (d > 1 && d <= 10)
    f = 2 + round(d-1)*0.25;
elseif (d > 10)
    f = 2 + 9*0.25 + round(d-10)*0.1;
end
if (a <= 18 || a >= 60)
    p = f*0.8;
else
    p = f;
end
end

% ///19
% 
% The function takes a 3-element vector and returns the three elements of the
% vector as three scalar output arguments in non-decreasing order.

function [a, b, c] = sort3(v)
if v(1) <= v(2) && v(2) <= v(3)
    a=v(1);b=v(2);c=v(3);
elseif v(1) <= v(3) && v(3) <= v(2)
    a=v(1);b=v(3);c=v(2);
elseif v(2) <= v(1) && v(1) <= v(3)
    a=v(2);b=v(1);c=v(3);
elseif v(2) <= v(3) && v(3) <= v(1)
    a=v(2);b=v(3);c=v(1);
elseif v(3) <= v(1) && v(1) <= v(2)
    a=v(3);b=v(1);c=v(2);
else v(3) <= v(2) && v(2) <= v(1);
    a=v(3);b=v(2);c=v(1);
end
end

% ///20
% 
% The function returns the difference between the ages of two children born
% in 2015 in days, where mx and dx are the month and day of birth respectively.

function dd = day_diff(m1, d1, m2, d2)
  A = [31 28 31 30 31 30 31 31 30 31 30 31]';
  day1 = d1 + sum(A(1:(m1-1)));
  day2 = d2 + sum(A(1:(m2-1)));
  if numel(m1) ~= 1 || numel(m2) ~= 1 || numel(d1) ~= 1 || numel(d2) ~= 1
      dd = -1;
  elseif  m1 < 1 || m2 < 1 || d1 < 1 || d2 < 1 || m1 ~= floor(m1) || ...
          m2 ~= floor(m2) || d1 ~= floor(d1) || d2 ~= floor(d2)
      dd = -1;
  elseif A(m1) < d1 || A(m2) < d2
      dd = -1;
  else
  dd = abs(day2-day1);
  end
end
'

% ///21
% 
% The function returns if a specified date is holiday or not, based on a month
% m and a day d. Are considered holidays January 1st , July 4th , December 25th
% and December 31st .

function r = holiday(m, d)
  A = [31 28 31 30 31 30 31 31 30 31 30 31]';
  day = d + sum(A(1:(m-1)));
  if day == 1 || day == 185 || day == 359 || day == 365
      r = true;
  else
      r = false;
  end
end
'

% ///22
% 
% The function calculates the polinomial c0 + c(1)x^1 + c(2)x^2 + ⋯ + c(N)x^N.
% c0 and x are scalars, c is a vector of lenght N and y is a scalar.

function y = poly_val(c0,c,x)
if isempty(c)
  y = c0;
else
  y = c0 + power(x, 1:numel(c))*c(:);
end

% ///23
% 
% The function calculates the exponentially weighted moving average avr of
% a sequence of scalars, i1. The current average depends on the current
% input and the previously computed average weighted by i1 and 1-i2
% respectively, where b is a coefficient between 0 and 1. If no i2 is
% provided, i2 defaults to 0.1.

function [ avr ] = exp_average( i1,i2 )
  persistent b;
  persistent a;
      if nargin>1 && isempty(b)
          b=i2; a = i1 ;
      elseif nargin>1 && ~isempty(b)
          b=i2; a=i1;
      elseif nargin<2 && isempty(a) && isempty(b)
          b=0.1; a = i1 ;
      elseif  nargin<2 && ~isempty(a) && ~isempty(b)
          a = b*i1+(1-b)*a;
      end
  avr = a;
end

% ///24
% 
% The function calculates the mean blur diameter in milimeters, mbd, of a
% concave spherical mirror, where D is the diameter of the mirror and fn is
% the f-number, the focal lenght f divided by D.
% 
% When a ray of light strikes such mirror in a vertical plane at a f distance
% ,it is spread over a circular disk. The light from the center of the mirror
% strikes the center of the disk, while light arriving from a point x from the
% center of the mirror strikes the circle of
% diameter d = 2f*tan(2*theta)(1/cos(theta)-1), where theta = arcsin(x/2f),
% which is the angle whose sine equals x/2f.
% 
% The function calculates d for all values of x in the vector
% x=0:delta_x:D/2, where delta_x=0.1. In the end, mbd is defined by the formula
% mbd = 8*delta_x/D^2 * sum(x(n)*d(n)).

function mbd= spherical_mirror_aberr(fn,D)
format long
f= fn.*D;
a= 0.01;
x= 0:a:D/2;
theta= asin(x./(2*f));
d= 2.*f.*tan(2.*theta).*((1./cos(theta))-1);
mbd= (((8*a)/D^2).*sum(x(:).*d(:)));
end

% ///25
% 
% The function moves every element of v that is equal to a to the end of
% the vector w.

function w = move_me(v,a)
if nargin < 2 % checks whether function input is less than 2
    a = 0;
    w = [v(v~=a) v(v==a)];
else
    w = [v(v~=a) v(v==a)];
end
end

% ///26
% 
% The function computes the sum of the elements of A that are in the
% lower right triangular part of A and the elements that are to the right of it,
% where A is an at most two-dimensional array.

function [counter] = halfsum (A)
[m,n]=size(A);
counter = 0;
ii=m;
for jj=1:n
  if ii>0
      counter=counter + sum(A(ii,jj:n));
      ii=ii-1;
  end
end
counter;
end

% ///27
% 
% The function identifies those elements of an array A that are smaller than the
% product of their two indexes.Then it gives the indexes of such elements found
% in column-major order, where v is a matrix with 2 colums, the first and second
% corresponding to the row and column indexes.

function v = small_elements (A)
[m, n] = size(A);
v=[];
for jj=1:n
  for ii=1:m
      if A(ii,jj)<ii*jj
          v=[v; ii jj];
      end
  end
end

% ///28
% 
% The function computes e, Euler's' number, but instead of going to infinity,
% the function stops at the smallest k for which the approximation differs
% from exp(1) (MATLAB’s built-in function) by no morethan the positive scalar,
% delta. Euler's' number is calculated by the sum of 1/k!, from k=0 to infinity.

function [e,k]= approximate_e (delta)
format long
s=exp(1);
k=0;
sn=1;
fac=1;
while abs(sn-s)>=abs(delta)
      fac=fac *(k+1);
      sn=sn+(1/fac);
      k=k+1;
end
e=sn;
end

% ///29
% 
% The function calculates the sum of all the elements in the two diagonals of
% a n-by-n spiral matrix.

function out = spiral_diag_sum(n)
    A = 3:2:n ;
    out = 1 + sum( 4*A.^2 - 6*(A-1)) ;
end

% ///30
% 
% This function computes the sum from k=0 to n of:(-1)^k*sin((2k+1)t)/(2k+1)^2
% for each of 1001 values of t uniformly spaced from 0 to 4pi inclusive. v is
% a row vector of those 1001 sums.


function v = triangle_wave(n)
t = linspace(0, 4*pi, 1001);
v = zeros(size(t));
k = 0:n;
for i = 1 : length(t)
  num   = ((-1) .^ k) .* sin(t(i) .* (2 * k + 1));
  den = (2 .* k + 1) .^ 2;
  v(i)   = sum(num ./ den);
end

% ///31
% 
% This function computes the largest product of b (positive integer)
% consecutive elements of a vector a. It returns the product and the index
% of the element of a that is the first term of the product. If there are multiple
% such products in a, the function returns the one with the smallest starting
% index.

function [p,i]=max_product(a,b)
    try
        [p, i] = max(prod(hankel(a(1:end-b+1),a(end-b+1:end)),2));
    catch
        p = 0;
        i = -1;
    end
end

% ///32
% 
% This function takes a0, a positive number less than π, and calculates the
% period T of a simple pendulum, which is the time required for a weight attached
% to a rod of length L and negligible weight to start from rest, swing
% with no friction under the influence of gravity from an initial angle a0 ,
% to – a0 and back to a0 again. The computation is based on classical mechanics
% 
% θ = angle [radians]
% ω = angular velocity [radians/s]
% α = angular acceleration [radians/s 2 ]
% g = acceleration
% 
% The function starts its calculation with the pendulum angle θ equal to a0 and
% then calculates a sequence of decreasing pendulum angles, each at a time
% separated from the one before it by ∆t = 1 × 10 -6 s. It continues until the
% pendulum has passed its lowest point, at which θ = 0. The elapsed time
% equals T/4 .
% 
% The calculation at each time step proceeds as follows: The angular acceleration
% α is set equal to −gsin(θ⁄L). Then the angular velocity ω is increased by the
% product of the angular acceleration and ∆t. The new angular velocity is then
% used to obtain a new θ by adding the product of the angular velocity and
% ∆t to the old θ.

function [T] = pendulum(L,a0)
      T = 0;
      if L > 0
          dt = 1.e-6;
          a_velocity = 0;
          g = 9.8;
          theta = abs(a0);
          while theta > 0
              a_acceleration = g*sin(theta)/L;
              a_velocity = a_velocity + dt * a_acceleration;
              theta = theta - dt * a_velocity;
              T = T + dt;
          end
      T = T*4;
      end
end

% ///33
% 
% The function takes as its input a matrix A of integers
% of type double, and returns the name of the smallest signed integer class to
% which A can be converted without loss of information. If no such class exists,
% the text 'NONE' is returned.

function out = integerize (A)
if A==int8(A)
    out='int8';
elseif A==int16(A)
    out='int16';
elseif A==int32(A)
    out='int32';
elseif A==int64(A)
    out='int64';
else
    out='NONE';
end

% ///34
% 
% The function returns a row-vector of struct-s whose elements correspond to the
% days of a month in 2016, as specified by m. If the input is not an integer
% between 1 and 12, the function returns an empty array. Each struct contains
% the fields: “month” (string, name of month, first letter capitalized), “date”
% (scalar, day of month) and “day” (three-letter abbreviation of day chosen).

function out = year2016(m)

if ~isscalar(m) || m <1 || m~=fix(m)
    out = [];
else
    VN = datenum([2016,m,1]):datenum([2016,m+1,1])-1;
    DN = 1+mod(VN-3,7);
    MC = {'January';'February';'March';'April';'May';'June';'July';'August';'September';'October';'November';'December'};
    DC = {'Mon','Tue','Wed','Thu','Fri','Sat','Sun'};
    out = struct('day',DC(DN),'date',num2cell(1:numel(VN)));
    [out(:).month] = deal(MC{m});
end

% ///35
% 
% The function returns the largest palindrome smaller than lim that is the
% product of two dig digit numbers. If no such number exists, the function
% returns 0.

function [n] = palin_product(dig,lim)

   UL = (10^dig) - 1;
   LL = 10^(dig - 1);

   c = UL: -1: LL;

   n = 0;
   list = [];
   plist = [];

for x = 1:numel(c)

  n = n+1;
    yy = c(n) * c;

    list = [list yy];

end
for y = 1:length(list)
    forward = num2str(list(y));
    backward = forward(end:-1:1);
    if forward == backward
        plist = [plist list(y)];

    end
end
under_lim = plist < lim;

final_list = plist(under_lim);

n = max(final_list);
if isempty(n)
    n = 0;

end

% ///36
% 
% The function takes as its input argument a char vector of length 16 or
% less that includes the characters of a telephone keypad that correspond
% to a set of uppercase letters (2 ABC, 3 DEF, 4 GHI, 5 JKL, 6 MNO, 7 PQRS,
% 8 TUV, 9 WXYZ), and returns as its output argument the telephone number
% as an uint64. It is asumed that the number never starts with 0, and if the
% input contains any illegal characters, the function returns 0.

function out_dig = dial(inp_string)
  characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  digits = '012345678922233344455566677778889999';
  if sum(~ismember(inp_string,characters))>0
        out_dig = uint64(0);
        return;
  else
      [~,idb] = ismember(inp_string,characters);
      out_dig = sscanf(digits(idb),'%lu');
  end
end

% ///37
% 
% An n-by-n square logical matrix can be represented by a cell vector of n
% elements where the kth element corresponds to the kth row of the matrix. Each
% element of the cell vector is a row vector of positive integers in increasing
% order representing the column indexes of the logical true values in the given
% row of the matrix. All other elements in the given row of the logical
% matrix are false. The function takes that cell vector and returns the
% corresponding square logical matrix.


function X = logiunpack(C)
X = false(numel(C));
for k = 1:numel(C)
    X(k,C{k}) = true;
end
end

% ///38
% 
% The function takes a square logical matrix as its only input argument and
% returns its cell vector representation as specified in the previous function.
% Empty array elements of the cell vector corresponding to rows with  all false
% values have a size of 0x0.

function C = logipack(X)
C = cell(1,size(X,1));
for k = 1:size(X,1)
    tmp = find(X(k,:));
    if tmp % if all values in tmp>0
        C{k} = tmp;
    end
end

% ///39
% 
% The function takes as input a positive integer, year, smaller than or equal
% to 3000 representing a year and returns a char vector with the century the
% given year falls into. If the input is invalid, the function returns the empty
% char vector ('').

function cent = centuries (year)
 if  ~isscalar(year) || year<1 || year>3000 || year~=fix(year)
    cent = '';
 else
    roman = {'I','II','III','IV','V','VI','VII','VIII','IX','X','XI',...
    'XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX','XXI',...
    'XXII','XXIII','XXIV','XXV','XXVI','XXVII','XXVIII','XXIX','XXX'};
    cent = roman{ceil(year/100)};
 end

% ///40
% 
% The function takes as input a function handle f, and the scalars x1 and x2,
% where x1 < x2. The function finds an x that lies in the range from x1 to x2,
% such that when y = f(x) is executed inside the function, y is approximately
% zero as defined by abs(y) < 1e-10.

function x = find_zero(f,x1,x2)
tolerance = 1e-10;
    if(f(x1)==0)
        x=x1;
        return
    elseif(f(x2)==0)
        x=x2;
        return
    else
        while tolerance < abs((x2-x1)/2)
        x3= mean([x1,x2]);
        if(f(x3)==0)
            x=x3;
            return
        elseif(f(x1)*f(x3)>0)
            x1=x3;
        elseif(f(x1)*f(x3)<0)
            x2=x3;
        end
        x = x3;
        end
    end
end

% ///41
% 
% The function takes the name of a text file as input and returns the number of
% digits (i.e., any of the characters, 0-to-9) that the file contains. If there
% is a problem opening the file, the function returns -1.


function num = digit_counter(filename)

fid = fopen(filename, 'r');
if fid < 0
    num = -1;
else
    characters = fread(fid, '*char');
    fclose(fid);

    isDigit = ismember(characters, '0':'9');

    num = sum(isDigit);
end
end

% ///42
% 
% The function returns the number of Mondays, foms, that fall on the first day of
% the month in a given year between 1776 and 2016, a positive integer scalar.

function [ foms ] = day_counter( year )

if ~isscalar(year) || year < 1776 || year > 2016 || year ~= floor(year)
    fprintf('Invalid input. Enter an integer between 1776 and 2016 inclusive')
    return
end
foms=sum(weekday(datetime(year,1:12,1))==2);
end

% ///43
% 
% The function adds together two positive integers, a and b, of any length
% specified as char vectors using decimal notation. The output argument summa
% is a char vector as well. a, b and summa contain digits only; no commas; spaces
% or any other characters are allowed. If any of these assumptions are violated
% by the input, the function returns the number -1.

function summa = huge_add(a,b)
  if ~ischar(a) || ~ischar(b) || sum(isstrprop(a,'digit')) ~= length(a) || ...
          sum(isstrprop(b,'digit')) ~= length(b)
      summa = -1;
      return;
  end
  lng = max([length(a) length(b)]);
  a = [a(end:-1:1) '0'+zeros(1,lng-length(a))];
  b = [b(end:-1:1) '0'+zeros(1,lng-length(b))];
  carry = 0;
  for ii = 1:lng
      c = carry + str2double(a(ii)) + str2double(b(ii));
      carry = c > 9;
      summa(ii) = num2str(mod(c,10));
  end
  if carry
      summa(end+1) = '1';
  end
  summa = summa(end:-1:1);
end

% ///44
% 
% The function returns mul, a uint64 and the smallest positive number that is
% evenly divisible by all of the numbers from 1 to n where n is a positive
% integer scalar.

function mul = smallest_multiple(n)
  facts = zeros(1,n);
  for ii = 2:n
      f = factor(ii);
      for jj = 2:ii
          k = sum(f == jj);
          if k > facts(jj)
              facts(jj) = k;
          end
      end
  end

  mul = prod(uint64((1:n).^facts),'native');
  if mul == intmax('uint64')
     mul = uint64(0);
  end
end

% ///45
% 
% The function takes a matrix A and a positive integer
% scalar n as inputs and computes the largest product of n adjacent elements in
% the same direction in A (e.g., products of consecutive elements in the same
% row, column, diagonal or reverse diagonal). The function returns a n-by-2 matrix
% containing the row and column indexes ordered first by row and then by column.
% If no such product exists, the function returns an empty array.

function B = maxproduct(A,n)
[r,c] = size(A);
if n>r && n>c
  B = [];
  return
end
L = [-Inf,0,0,0];
for i=1:r
  for j=1:c-n+1
    L = check(A(i,j:j+n-1),[i,j,1],L);
  end
end
for i=1:r-n+1
  for j=1:c
    L = check(A(i:i+n-1,j),[i,j,2],L);
  end
end
for i=1:r-n+1
  for j=1:c-n+1
    S=A(i:i+n-1,j:j+n-1);
    L = check(diag(S),[i,j,3],L);
    L = check(diag(flip(S,2)),[i,j,4],L);
  end
end
i=L(2); j=L(3);
switch L(4)
  case 1, B = [ones(n,1)*i,(j:j+n-1)'];
  case 2, B = [(i:i+n-1)',ones(n,1)*j];
  case 3, B = [(i:i+n-1)',(j:j+n-1)'];
  case 4, B = [(i:i+n-1)',(j+n-1:-1:j)'];
end
end
function L = check(V,d,L)
p = prod(V);
if p>L(1)
  L = [p,d];
end
end

% ///46
% 
% The function returns the number of letters needed to write down the number n,
% a positive integer smaller than 1000, in words. No spaces nor hyphens
% are counted.

function m = number2letters (n)

  A = [ 0 3 3 5 4 4 3 5 5 4; ...
        3 6 6 8 8 7 7 9 8 8; ...
        0 0 6 6 5 5 5 7 6 6];
  h = fix(n/100);
  t = fix(rem(n,100)/10);
  u = rem(n,10);
  if h>0,     m = A(1,h+1)+7;
  else        m = 0;
  end
  switch t
    case 0,   m = m+A(1,u+1);
    case 1,   m = m+A(2,u+1);
    otherwise m = m+A(3,t+1)+A(1,u+1);      
  end
end

% ///47
% 
% The function finds the number of circular prime numbers smaller than n, where
% n is a positive integer scalar input argument.For example, the number, 197,
% is a circular prime because all rotations of its digits: 197, 971, and 719, are
% themselves prime. Here rotation means circular permutation not all
% possible permutations.

function n = circular_primes(k)
    n = 0;
    for p = primes(k-1)
        if circular_prime(p)
            n = n + 1;
        end
    end
end

% ///48
% 
% The function takes the voltage difference V (in volts) applied to a cyclotron
% as input. The cyclotron is a device that accelerates subatomic particles
% (deuterons) between two “D”-shaped vacuum chambers.The function returns
% the energy E of the deuteron when it escapes the cyclotron in units
% of million electron volts (MeV), which equals V*n x 10^(-6), and the number
% n of times the deuteron enters the Ds.
% 
% //More information about how the cyclotron works is in external sources

function [E,n] = cyclotron (V)
    m = 3.344e-27;           % mass of deuteron [kg]
    q = 1.603e-19;           % charge of deuteron [c]
    B = 1.600;               % magnetic field strength [t]
    z = m*V/(q*B^2);         % initial trajectory radius squared [m^2]
    n = 0;                   % pass number
    d = 2;                   % diameter/radius, sign alternates
    r = sqrt(z);             % initial radius of curvature
    x = -r/2.0;              % initial x-coordinate

    while x>=-0.5            % while deuteron has not emerged
        x = x+d*r;           % spiral to next x-coordinate ;
        n = n+1;             % update pass number
        d = -d;              % ... and direction
        r = sqrt(r^2+2*z);   % calculate new radius in case needed
    end
    E = V*n*1e-6;            % determine energy
end
