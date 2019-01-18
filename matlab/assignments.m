--------Lesson 3-----------
%1 ////////

function [a, p] = circle(r)
a = pi*r^2;
p = 2*pi*r;
end

%2 ////

function s = even_index(M)
s = M(2:2:end, 2:2:end);
end

%3 ////

function w = flip_it(v)
w = v(end:-1:1);
end

%4 ///

function M = top_right(N,n)
M = N(1:n, end-n+1:end);
end

%5 ////

function s = peri_sum(N)
s=sum([N(1:end-1,1)' N(end,1:end-1) N(2:end,end)' N(1,2:end)]);
end

%6 ////

function [t,d] = light_speed(D)
t = (D/300000)/60;
d = D/1.609;
end

%7 ////

function amag = accelerate(F1,F2,m)
F = F1 + F2;
a = F./m;
b = a.^2;
c = sum(b);
amag = sqrt(c);
end

%8 ////

function total = income(rate,price)
a = rate.*price;
b = a.*96;
total = sum(b);
end

--------Lesson 4-----------

%1 ////////

function Q = intquad(n,m)
q1 = zeros(n,m); q2 = ones(n,m); q3 = 2*ones(n,m); q4 = 3*ones(n,m);
Q = [q1 q2;q3 q4];
end


%2 ////

function [F,M] = sindeg(deg)
rad = deg.*(pi/180);
F = sin(rad);
M = mean(F(:));
end


%3 ////

function S = simple_stats(N)
S = [mean(N,2),median(N,2),min(N,[],2),max(N,[],2)];
end

%4 ///

function orms = odd_rms(nn)
  orms = sqrt(mean((1:2:(2*nn-1)).^2));
end

%5 ////

function [n,p] = fence(lng,seg)
n = ceil((lng/seg));
p = n+1;
end


%6 ////

function [n] = zero_stat(M)
numb = numel(M);
n = ((sum(M(:) == 0))/numb)*100;
end

%7 ////

function M = reverse_diag(n)
 Z = zeros(n);
 Z(1: n+1 : n^2)=1;
 M = flip(Z, 2);
end

%8 ////

function s = sum3and5muls(n)
   s = sum(3:3:n)+sum(5:5:n)-sum(15:15:n);
end

--------Lesson 5-----------

%1 ////////

function [output] = eligible(v,q)

m = (v+q)/2;
if (m>=92)&&(v>88&&q>88)
    output=true;
else
    output=false;
end

%2 ////

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

%3 ////

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

%4 ///

function dd = day_diff(m1, d1, m2, d2)
  A = [31 28 31 30 31 30 31 31 30 31 30 31]';
  day1 = d1 + sum(A(1:(m1-1)));
  day2 = d2 + sum(A(1:(m2-1)));
  if numel(m1) ~= 1 || numel(m2) ~= 1 || numel(d1) ~= 1 || numel(d2) ~= 1
      dd = -1;
  elseif  m1 < 1 || m2 < 1 || d1 < 1 || d2 < 1 || m1 ~= floor(m1) || m2 ~= floor(m2) || d1 ~= floor(d1) || d2 ~= floor(d2)
      dd = -1;
  elseif A(m1) < d1 || A(m2) < d2
      dd = -1;
  else
  dd = abs(day2-day1);
  end
end
'
%5 ////
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

%6 ////

function y = poly_val(c0,c,x)
if isempty(c)
  y = c0;
else
  y = c0 + power(x, 1:numel(c))*c(:);
end

%7 ////

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

%8 ////

function mbd= spherical_mirror_aberr(fn,D)
format long
f= fn.*D;
a= 0.01;
x= 0:a:D/2;
theta= asin(x./(2*f));
d= 2.*f.*tan(2.*theta).*((1./cos(theta))-1);
mbd= (((8*a)/D^2).*sum(x(:).*d(:)));
end

--------Lesson 6-----------
%1 ////////

function w = move_me(v,a)
if nargin < 2 % checks whether function input is less than 2
    a = 0;
    w = [v(v~=a) v(v==a)];
else
    w = [v(v~=a) v(v==a)];
end
end

%2 ////

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

%3 ////

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

%4 ///

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

%5 ////

function out = spiral_diag_sum(n)
    A = 3:2:n ;
    out = 1 + sum( 4*A.^2 - 6*(A-1)) ;
end

%6 ////

function v = triangle_wave(n)
t = linspace(0, 4*pi, 1001);
v = zeros(size(t));
k = 0:n;
for i = 1 : length(t)
  num   = ((-1) .^ k) .* sin(t(i) .* (2 * k + 1));
  den = (2 .* k + 1) .^ 2;
  v(i)   = sum(num ./ den);
end

%7 ////

function [p,i]=max_product(a,b)
    try
        [p, i] = max(prod(hankel(a(1:end-b+1),a(end-b+1:end)),2));
    catch
        p = 0;
        i = -1;
    end
end

%8 ////

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
